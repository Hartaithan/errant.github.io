import type { FC } from "react";
import type { IconProps } from "@/models/icon";

const IconHH: FC<IconProps> = (props) => {
  const { width, height, color = "#FFFFFF", ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 266.667 266.667"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <defs>
        <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
          <path
            d="M1000 0c552.29 0 1000 447.715 1000 1000 0 552.29-447.71 1000-1000 1000C447.715 2000 0 1552.29 0 1000 0 447.715 447.715 0 1000 0zM558.785 1471.29v-340.15c51.766 61.72 113.844 92.82 185.844 92.82 37.098 0 70.312-7.06 100.078-21.14 29.883-13.96 52.234-31.88 67.293-53.61 15.176-21.96 25.41-46 30.941-72.5 5.528-26.36 8.274-67.42 8.274-123.062V589.922H790.273v327.566c0 65.024-2.902 106.202-9.019 123.692-6.117 17.61-16.863 31.45-32.313 41.64-15.492 10.47-34.785 15.65-58.078 15.65-26.629 0-50.59-6.7-71.371-19.92-21.219-13.34-36.512-33.26-46.16-59.88-9.844-26.67-14.742-66.041-14.547-118.158l-.195-310.59H397.883v881.368zm633.605 0v-340.15c51.81 61.72 113.84 92.82 185.84 92.82 36.95 0 70.36-7.06 100.24-21.14 29.73-13.96 52.08-31.88 67.1-53.61 15.18-21.96 25.45-46 30.94-72.5 5.53-26.36 8.28-67.42 8.28-123.062V589.922h-160.75v327.566c0 65.024-3.02 106.202-9.18 123.692-6.11 17.61-16.82 31.45-32.35 41.64-15.33 10.47-34.78 15.65-58.08 15.65-26.63 0-50.55-6.7-71.37-19.92-20.98-13.34-36.31-33.26-46.12-59.88-9.65-26.67-14.55-66.041-14.55-118.158v-310.59h-160.74v881.368z"
            clipRule="evenodd"
          />
        </clipPath>
        <clipPath id="clipPath24" clipPathUnits="userSpaceOnUse">
          <path d="M0 0h2000v2000H0z" />
        </clipPath>
      </defs>
      <g transform="matrix(1.33333 0 0 -1.33333 0 266.667)">
        <g transform="scale(.1)">
          <g>
            <g clipPath="url(#clipPath18)">
              <g clipPath="url(#clipPath24)">
                <path
                  fill={color}
                  fillOpacity="1"
                  fillRule="nonzero"
                  stroke="none"
                  d="M-100-100h2200v2200H-100z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconHH;
