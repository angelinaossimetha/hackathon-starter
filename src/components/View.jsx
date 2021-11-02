import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';
import Words from './Words';
/*  
    API Websites
    1. https://labs.bible.org/api/?passage=random&type=json (Verses)
    2. https://english.api.rakuten.net/ajith/api/holy-bible?endpoint=53aa5debe4b0a9b1348db996 (Chapters) 
*/

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userChoice: "",
            verse: {},
            chapter: {},
            showText: false,
        }
        this.getRandomVerse = this.getRandomVerse.bind(this);
        this.getRandomChapter = this.getRandomChapter.bind(this);
        this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onButtonClickHandler() {
        if (this.state.userChoice == 'verse') {
            this.getRandomVerse();
        } else {
            this.getRandomChapter();
        }
        this.setState({ showText: true });
    }


    getRandomVerse() {
        axios
            .get('https://labs.bible.org/api/?passage=random&type=json')
            .then(response => response.data)
            .then(verseJson => {
                this.setState({ verse: verseJson[0] })
            });
    }

    handleChange(event) {
        if (this.state.userChoice != "" && event.target.value != this.state.userChoice) {
            let bool = !this.state.showText;
            this.setState({ showText: bool });
        }
        this.setState({ [event.target.name]: event.target.value });
    }

    getRandomChapter() {
        let chapter = Math.floor(Math.random() * 21) + 1;
        // let link = `https://ajith-holy-bible.p.rapidapi.com/GetChapter?Book=John&chapter=${chapter}`;

        let link = `https://labs.bible.org/api/?passage=John%20${chapter}`;
        axios
            .get(link)
            .then(response => response.data)
            .then(chapterJson => {
                this.setState({
                    chapter: {
                        text: chapterJson,
                        chapter
                    }
                })
            });


    }

    render() {
        return (
            <div className='container'>
                <Header />
                <select
                    name='userChoice'
                    // className='update-todo-priority'
                    onChange={this.handleChange}
                    value={this.state.userChoice}>
                    <option>Make a selection</option>
                    <option value='verse'>Verse</option>
                    <option value='chapter'>Chapter</option>
                </select>
                {/* <button
                    className='btn btn-success pull-right'
                    name='button'
                    type='submit'
                    onClick={() => { this.getRandomVerse()}}>Get words of life</button> */}
                <Words
                    verse={this.state.verse}
                    chapter={this.state.chapter}
                    userChoice={this.state.userChoice}
                    showText={this.state.showText}
                    onButtonClickHandler={this.onButtonClickHandler}
                />
            </div>
        );
    }
}

export default View;