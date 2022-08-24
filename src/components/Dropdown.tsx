import React from 'react';

type OptionsType = {
	options: [{ name: string; value: string }];
};

const Dropdown = ({ options }: OptionsType) => {
	return (
		<div>
			<select>
				{options.map((item, index) => (
					<option value={item.value} key={index}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
