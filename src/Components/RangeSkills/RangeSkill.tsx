import "./RangeSkill.scss";

interface PropsRange {
  color: string;
  width: string;
}

function RangeSkill({ color, width }: PropsRange) {
  return (
    <>
      <div className='fora'>
        <span
          className='dentro'
          style={{ backgroundColor: `${color}`, width: `${width}` }}
        ></span>
      </div>
    </>
  );
}

export default RangeSkill;
