// json that holds all inputs and dropdowns for the create business page

export const createBusi = [
    {
        id: 1,
        title: 'Business Name',
        type: 'text',
        placeholder: 'Enter Business Name',
        required: true,
        value: '',
        error: '',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 3,
            maxLength: 50,
        },
        width: 'half'
    },
    {
        id: 2,
        title: 'Business Email',
        type: 'email',
        placeholder: 'Enter Business Email',
        required: true,
        value: '',
        error: '',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 3,
            maxLength: 50,
        },
        width: 'half'
    },
    // for dropdown 
    {
        id: 3,
        title: 'Business Category',
        type: 'select',
        placeholder: 'Select Business Category',
        required: true,
        value: '',
        error: '',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 3,
            maxLength: 50,
        },
        options: [
            { value: '1', displayValue: 'Category 1' },
            { value: '2', displayValue: 'Category 2' },
            { value: '3', displayValue: 'Category 3' },
            { value: '4', displayValue: 'Category 4' },
        ],
        width: 'full'
    },
];

export  const MapFied = (props) => {

    return (
        <>
            <div>
                {
                    createBusi.map((item, index) => {
                        if (item.options) {
                            return (
                                <div key={index}>
                                    <label>{item.title}</label>
                                    <select
                                        value={item.value}
                                        onChange={props.changed}>
                                        {item.options.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.displayValue}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index}>
                                    <label>{item.title}</label>
                                    <input
                                        {...item}
                                        value={item.value}

                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}




// const showInput = (props) => {
//     let inputElement = null;
//     const inputClasses = [classes.InputElement];

//     if (props.invalid && props.shouldValidate && props.touched) {
//         inputClasses.push(classes.Invalid);
//     }

//     switch (props.elementType) {
//         case ('input'):
//             inputElement = <input
//                 className={inputClasses.join(' ')}
//                 {...props.elementConfig}
//                 value={props.value}
//                 onChange={props.changed} />;
//             break;
//         case ('textarea'):
//             inputElement = <textarea
//                 className={inputClasses.join(' ')}
//                 {...props.elementConfig}
//                 value={props.value}
//                 onChange={props.changed} />;
//             break;
//         case ('select'):
//             inputElement = (
//                 <select
//                     className={inputClasses.join(' ')}
//                     value={props.value}
//                     onChange={props.changed}>
//                     {props.elementConfig.options.map(option => (
//                         <option key={option.value} value={option.value}>
//                             {option.displayValue}
//                         </option>
//                     ))}
//                 </select>
//             );
//             break;
//         default:
//             inputElement = <input
//                 className={inputClasses.join(' ')}
//                 {...props.elementConfig}
//                 value={props.value}
//                 onChange={props.changed} />;
//     }

//     return (
//         <div className={classes.Input}>
//             <label className={classes.Label}>{props.label}</label>
//             {inputElement}
//         </div>
//     );
// }
