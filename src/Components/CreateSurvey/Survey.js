import React, { useState, Fragment } from 'react';

const Survey = (props) => {
	const [ surveyType, setSurveyType ] = useState('defaultValue');
    const [ options, setOptions ] = useState([ { value: '', id: Date.now() } ]);
    
    const onAddItem = () => {
        // Approach 1 :
        // const updatedOptions = [...options];
        // updatedOptions.push({value: '', id: Date.now()})
        // setOptions(updatedOptions)

        // Approach 2 :
        setOptions([...options, {value: '', id: Date.now()}]);
    }


	return (
		<Fragment>
			<div className="question-type-container">
				<select
					name="survey"
					value={surveyType}
					onChange={(evt) => {
						setSurveyType(evt.target.value);
					}}
				>
					<option value="defaultValue">Select question type</option>
					<option value="multi">Multi-select</option>
					<option value="single">Single select</option>
				</select>
			</div>
			{surveyType !== 'defaultValue' ? (
				<div className="survey-container">
					<input type="text" placeholder="Enter your question here" className="question-container" />
					<p>Options</p>
					{options.map((option) => (
						<div className="answer-container">
							<input type="text" placeholder="Type answer here" value={option.value}/>
							<p onClick={onAddItem}>➕</p>
							<p>➖</p>
						</div>
					))}
				</div>
			) : null}
		</Fragment>
	);
};

export default Survey;

// 1. Write a onClick event handler for <p> + </p>
// 2. When + is clicked, you add another option object to the options state.

