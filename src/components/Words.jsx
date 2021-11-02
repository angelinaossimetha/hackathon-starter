import React from 'react';

const Words = props => {
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
                                <p>{`John ${props.chapter.chapter}`}</p>
                            </div>
                            :
                            <div></div>

                }
            </div>
        </div>
    )
}

export default Words;
