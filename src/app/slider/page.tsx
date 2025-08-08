'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

interface SliderMark {
  value: number;
  label?: string;
}

interface LightweightSliderProps {
  value?: number | number[];
  defaultValue?: number | number[];
  min?: number;
  max?: number;
  marks?: SliderMark[] | boolean;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  track?: 'normal' | 'inverted' | false;
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  onChangeCommitted?: (event: Event, value: number | number[]) => void;
  className?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  disableSwap?: boolean;
  getAriaLabel?: (index: number) => string;
  getAriaValueText?: (value: number, index: number) => string;
  name?: string;
  tabIndex?: number;
  shiftStep?: number;
  scale?: (value: number) => number;
}

const LightweightSlider: React.FC<LightweightSliderProps> = ({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  marks = false,
  disabled = false,
  orientation = 'horizontal',
  track = 'normal',
  onChange,
  onChangeCommitted,
  className = '',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  disableSwap = false,
  getAriaLabel,
  getAriaValueText,
  name,
  tabIndex,
  shiftStep = 10,
  scale = (x) => x,
}) => {
  const [internalValue, setInternalValue] = useState(() => {
    if (controlledValue !== undefined) return controlledValue;
    return defaultValue;
  });

  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState(-1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;
  const isRange = Array.isArray(currentValue);

  const marksArray = React.useMemo(() => {
    if (!marks) return [];
    if (marks === true) {
      return [
        { value: min, label: min.toString() },
        { value: max, label: max.toString() }
      ];
    }
    return marks as SliderMark[];
  }, [marks, min, max]);

  const snapToMarks = marksArray.length > 0;

  const valueToPercent = useCallback((val: number) => {
    return ((val - min) / (max - min)) * 100;
  }, [min, max]);

  const percentToValue = useCallback((percent: number) => {
    const val = min + (percent / 100) * (max - min);
    
    if (snapToMarks) {
      const closest = marksArray.reduce((prev, curr) => 
        Math.abs(curr.value - val) < Math.abs(prev.value - val) ? curr : prev
      );
      return closest.value;
    }
    
    return Math.round(val);
  }, [min, max, snapToMarks, marksArray]);

  const getValueFromEvent = useCallback((event: MouseEvent | TouchEvent) => {
    if (!sliderRef.current) return min;

    const rect = sliderRef.current.getBoundingClientRect();
    let percent: number;

    if (orientation === 'horizontal') {
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      percent = ((clientX - rect.left) / rect.width) * 100;
    } else {
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      percent = ((rect.bottom - clientY) / rect.height) * 100;
    }

    return percentToValue(Math.max(0, Math.min(100, percent)));
  }, [orientation, percentToValue, min]);

  const updateValue = useCallback((newValue: number | number[], event: Event, activeThumb?: number) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(event, newValue, activeThumb ?? 0);
  }, [isControlled, onChange]);

  const handleMouseDown = useCallback((event: React.MouseEvent, thumbIndex?: number) => {
    if (disabled) return;

    event.preventDefault();
    setIsDragging(true);

    if (isRange && thumbIndex !== undefined) {
      setActiveThumb(thumbIndex);
    } else {
      setActiveThumb(0);
    }

    const newValue = getValueFromEvent(event.nativeEvent);

    if (isRange) {
      const values = currentValue as number[];
      if (thumbIndex !== undefined) {
        const newValues = [...values];
        
        // DisableSwap logic
        if (!disableSwap) {
          newValues[thumbIndex] = newValue;
        } else {
          // Prevent thumbs from crossing over
          if (thumbIndex === 0) {
            newValues[thumbIndex] = Math.min(newValue, values[1]);
          } else {
            newValues[thumbIndex] = Math.max(newValue, values[0]);
          }
        }
        
        updateValue(newValues, event.nativeEvent, thumbIndex);
      }
    } else {
      updateValue(newValue, event.nativeEvent, 0);
    }
  }, [disabled, isRange, currentValue, getValueFromEvent, updateValue, disableSwap]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, thumbIndex?: number) => {
    if (disabled) return;

    let step = 1;
    if (snapToMarks && marksArray.length > 1) {
      step = marksArray[1].value - marksArray[0].value;
    }

    let newValue: number;
    const currentVal = isRange 
      ? (currentValue as number[])[thumbIndex || 0] 
      : currentValue as number;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newValue = Math.min(max, currentVal + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newValue = Math.max(min, currentVal - step);
        break;
      case 'PageUp':
        event.preventDefault();
        newValue = Math.min(max, currentVal + shiftStep);
        break;
      case 'PageDown':
        event.preventDefault();
        newValue = Math.max(min, currentVal - shiftStep);
        break;
      case 'Home':
        event.preventDefault();
        newValue = min;
        break;
      case 'End':
        event.preventDefault();
        newValue = max;
        break;
      default:
        return;
    }

    // If the slider is a range, handle the thumb index
    if (isRange && thumbIndex !== undefined) {
      const values = currentValue as number[];
      const newValues = [...values];
      
      if (!disableSwap) {
        newValues[thumbIndex] = newValue;
      } else {
        if (thumbIndex === 0) {
          newValues[thumbIndex] = Math.min(newValue, values[1]);
        } else {
          newValues[thumbIndex] = Math.max(newValue, values[0]);
        }
      }
      
      updateValue(newValues, event.nativeEvent, thumbIndex);
    } else {
      updateValue(newValue, event.nativeEvent, 0);
    }
  }, [disabled, snapToMarks, marksArray, isRange, currentValue, max, min, updateValue, shiftStep, disableSwap]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      const newValue = getValueFromEvent(event);

      if (isRange) {
        const values = currentValue as number[];
        const newValues = [...values];
        
        // DisableSwap logic for drag events
        if (!disableSwap) {
          newValues[activeThumb] = newValue;
        } else {
          if (activeThumb === 0) {
            newValues[activeThumb] = Math.min(newValue, values[1]);
          } else {
            newValues[activeThumb] = Math.max(newValue, values[0]);
          }
        }
        
        updateValue(newValues, event, activeThumb);
      } else {
        updateValue(newValue, event, 0);
      }
    };

    // Handle mouse and touch end events to stop dragging
    const handleEnd = (event: MouseEvent | TouchEvent) => {
      setIsDragging(false);
      setActiveThumb(-1);
      onChangeCommitted?.(event, currentValue);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, activeThumb, getValueFromEvent, isRange, currentValue, updateValue, onChangeCommitted, disableSwap]);

  const renderThumb = (value: number, index: number) => {
    const scaledValue = scale(value);
    
    const transformClass = orientation === 'horizontal' 
      ? 'transform -translate-x-1/2 -translate-y-1/2'
      : 'transform -translate-x-1/2 -translate-y-1/2';
    
    return (
      <div
        key={index}
        className={`absolute w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg cursor-pointer ${transformClass} transition-transform ${
          isDragging && activeThumb === index ? 'scale-110' : 'hover:scale-110'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{
          left: orientation === 'horizontal' ? `${valueToPercent(value)}%` : '50%',
          top: orientation === 'vertical' ? `${100 - valueToPercent(value)}%` : '50%',
        }}
        onMouseDown={(e) => handleMouseDown(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={disabled ? -1 : (tabIndex ?? 0)}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={scaledValue}
        aria-label={getAriaLabel ? getAriaLabel(index) : ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-valuetext={getAriaValueText ? getAriaValueText(scaledValue, index) : undefined}
      >
        <input
          type="hidden"
          name={name}
          value={scaledValue}
          disabled={disabled}
        />
      </div>
    );
  };

  const renderTrack = () => {
    if (track === false) return null;

    const values = isRange ? (currentValue as number[]) : [min, currentValue as number];
    const startPercent = valueToPercent(Math.min(...values));
    const endPercent = valueToPercent(Math.max(...values));

    // Adjust for inverted track
    if (orientation === 'horizontal') {
      return (
        <div
          className="absolute h-1 bg-red-600 rounded transition-all duration-150"
          style={{
            left: `${track === 'inverted' ? endPercent : startPercent}%`,
            width: `${track === 'inverted' ? 100 - endPercent : endPercent - startPercent}%`,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      );
    } else {
      return (
        <div
          className="absolute w-1 bg-red-600 rounded transition-all duration-150"
          style={{
            top: `${track === 'inverted' ? startPercent : 100 - endPercent}%`,
            height: `${track === 'inverted' ? 100 - endPercent : endPercent - startPercent}%`,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      );
    }
  };

  const containerClass = orientation === 'horizontal' 
    ? 'relative h-12 w-full max-w-10xl' 
    : 'relative w-12 h-full';

  const railClass = orientation === 'horizontal'
    ? 'absolute w-full h-1 bg-gray-300 rounded top-1/2 transform -translate-y-1/2'
    : 'absolute h-full w-1 bg-gray-300 rounded left-1/2 transform -translate-x-1/2';

  return (
    <div className={`${containerClass} ${className}`} ref={sliderRef}>
      {/* Rail */}
      <div className={railClass} />
      
      {/* Track */}
      {renderTrack()}
      
      {/* Marks */}
      {marksArray.map((mark) => (
        <div key={mark.value}>
          <div
            className="absolute w-1 h-5 bg-gray-400 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: orientation === 'horizontal' ? `${valueToPercent(mark.value)}%` : '50%',
              top: orientation === 'vertical' ? `${100 - valueToPercent(mark.value)}%` : '50%',
              bottom: orientation === 'horizontal' ? '7.5%' : 'auto',
            }}
          />
          {mark.label && (
            <div
              className="absolute text-xs text-gray-600 transform -translate-x-1/2"
              style={{
                left: orientation === 'horizontal' ? `${valueToPercent(mark.value)}%` : '50%',
                top: orientation === 'vertical' ? `${100 - valueToPercent(mark.value)}%` : '100%',
                bottom: orientation === 'horizontal' ? '-20px' : 'auto',
                marginTop: orientation === 'horizontal' ? '4px' : '0',
                marginLeft: orientation === 'vertical' ? '20px' : '0',
              }}
            >
              {mark.label}
            </div>
          )}
        </div>
      ))}
      
      {/* Thumbs */}
      {isRange 
        ? (currentValue as number[]).map((value, index) => renderThumb(value, index))
        : renderThumb(currentValue as number, 0)
      }
    </div>
  );
};

const SliderDemo = () => {
  const [value, setValue] = useState(58);
  const [rangeValue, setRangeValue] = useState([20, 80]);
  const [disableSwapValue, setDisableSwapValue] = useState([30, 70]);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Sliders</h1>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Single Value Slider (Value: {value})</h2>
        <LightweightSlider
          value={value}
          min={0}
          max={100}
          onChange={(_, newValue) => {
            setValue(newValue as number);
          }}
          aria-label="Single value slider"
          name="singleSlider"
        />
      </div>
      
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Range Slider (Values: {rangeValue[0]} - {rangeValue[1]})</h2>
        <LightweightSlider
          value={rangeValue}
          min={0}
          max={100}
          onChange={(_, newValue) => {
            setRangeValue(newValue as number[]);
          }}
          getAriaLabel={(index) => `Range slider thumb ${index + 1}`}
          getAriaValueText={(value, index) => `${value} units for thumb ${index + 1}`}
          name="rangeSlider"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Range Slider (Swap Disabled) (Values: {disableSwapValue[0]} - {disableSwapValue[1]})</h2>
        <LightweightSlider
          value={disableSwapValue}
          min={0}
          max={100}
          disableSwap={true}
          onChange={(_, newValue) => {
            setDisableSwapValue(newValue as number[]);
          }}
          getAriaLabel={(index) => `No-swap range slider thumb ${index + 1}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Slider with Marks</h2>
        <LightweightSlider
          defaultValue={50}
          min={0}
          max={100}
          marks={Array.from({ length: 11 }, (_, i) => ({ value: i * 10, label: String(i * 10) }))}
          scale={(x) => Math.pow(x / 100, 2) * 100}
          shiftStep={20}
          aria-label="Slider with exponential scale"
          tabIndex={1}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Vertical Slider</h2>
        <div style={{ height: '300px' }}>
          <LightweightSlider
            defaultValue={[25, 75]}
            min={0}
            max={100}
            orientation="vertical"
            getAriaLabel={(index) => `Vertical slider thumb ${index + 1}`}
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Inverted Track Slider</h2>
        <LightweightSlider
          defaultValue={30}
          min={0}
          max={100}
          track="inverted"
          aria-label="Inverted track slider"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Disabled Slider</h2>
        <LightweightSlider
          value={[40, 60]}
          min={0}
          max={100}
          disabled={true}
          aria-label="Disabled slider"
        />
      </div>
    </div>
  );
};

export default SliderDemo;