import styled from '@emotion/styled';

const Svg = styled.svg`
  align-items: center;
`;

const Rect = styled.rect<{ rotate: number }>`
  transform: ${({ rotate }) => `rotate(${rotate * 45}deg)`};
  transform-box: fill-box;
  transform-origin: center;
`;

interface Props {
  data: { color: string; name: string; progress: number }[];
}

const DoneImg = ({ data }: Props) => {
  return (
    <Svg viewBox="-17 -3 39 39">
      {data.map(
        ({ color, progress }, i) =>
          progress > 0 && (
            <Rect
              key={i}
              rotate={i}
              x="0"
              y="0"
              width="7"
              height="33"
              rx="4"
              ry="4"
              fill={color}
              opacity={progress / 100}
            />
          ),
      )}
    </Svg>
  );
};

export default DoneImg;
