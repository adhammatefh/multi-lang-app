import React, { Component } from 'react';
import './App.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import ar from './lang/ar';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ar', ar);
counterpart.setLocale('en');

class App extends Component {

  state = {
    lang: 'en'
  }

  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }

  render() {
    return (
      <div className="App">

        <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>

        <Translate content="title" component="h1" className="class"/>

        <Translate content="copy.p1" component="p" unsafe={true}/>

        <Translate content="copy.p2" component="p"/>

        <Translate component="input" type="text" attributes={{placeholder: 'placeholder'}}/>

      </div>
    );
  }
}

export default App;
