import React from 'react';

/* 
    1. Edit Button 
    2. Delete Button
    3. Todo Description (Text)
    4. Complete Checkbox
*/

const Words = props => {
    console.log(props.chapter);
    return (
        <div>
            <button
                className='btn btn-success pull-right'
                name='button'
                type='submit'
                onClick={() => { props.onButtonClickHandler() }}>Get words of life</button>
            <div>
                {
                    props.userChoice == 'verse' && props.showText ?
                        <div>
                            <p>{props.verse.text}</p>
                            <p>{`${props.verse.bookname} ${props.verse.chapter}:${props.verse.verse}`}</p>
                        </div>
                        : props.userChoice == 'chapter' && props.showText ?
                        <div>
                        <div dangerouslySetInnerHTML={{ __html: props.chapter.text }} />
                            {/* <p>{props.chapter.text}</p> */}
                            <p>{`John ${props.chapter.chapter}`}</p>
                        </div>
                        : 
                        <div></div>

                }
            </div>
        </div>
    )


    return thisWords;
}



// const Words = props => {
//     let thisWords;
//     if (props.userChoice == 'verse') {
//         var { bookname, chapter, verse, text } = props.verse;
//         thisWords = (
//             <div>
//                 <p>{text}</p><br></br>
//                 <p>"{bookname} + {chapter} + ":" + {verse}"</p>
//             </div>
//         )
//     } else { 
//         thisWords = (
//         <div>

//         </div>
//         )
//     }

//     return thisWords;
// }


export default Words;
