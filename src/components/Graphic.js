// react
import { ResponsivePie } from '@nivo/pie';

const Graphic = ({ data }) => {
	return (
		<ResponsivePie
			data={data}
			margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			colors={{ scheme: 'paired' }}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 0.2]],
			}}
			arcLabelsSkipAngle={10}
			motionConfig="wobbly"
			enableArcLinkLabels={false}
			arcLabelsTextColor={{
				from: 'color',
				modifiers: [['darker', '3']],
			}}
			arcLabel="label"
		/>
	);
};

export default Graphic;
