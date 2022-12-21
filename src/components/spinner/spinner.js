import { forwardRef, memo } from 'react';
import styled from 'styled-components';

// memo is used to prevent re-rendering of the component if the props are not changed

const sizeMap = {
    small: '16px',
    medium: '32px',
    large: '80px'
}

const Spinn = memo(forwardRef(
    function Spinner(props, ref) {
        const {
            sizeKey,
            color,
            isVisable,
            type = "spinner",
            ...rest
        } = props;

        if (!isVisable) return null;

        const size = sizeMap[sizeKey || 'medium'];

        return (
            <>
                {type === "spinner" && (
                    <svg id="Spinner" ref={ref} height={size} width={size} viewBox="0 0 16 16" fill="none" {...rest} color={color && color} >
                        <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="currentColor"
                            strokeOpacity="0.25"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                        <path
                            d="M15 8a7.002 7.002 0 00-7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                )}
                {type === "dots" && (
                    <div ref={ref} {...rest} color={color && color} >
                        <i />
                        <i />
                        <i />
                    </div>
                )}
            </>
        )
    }
))

const Spinner = styled(Spinn)`
  @keyframes rotate-keyframes {
    100% {
      transform: rotate(360deg);
    }
  }

  animation: rotate-keyframes 1s linear infinite;

`
export default Spinner