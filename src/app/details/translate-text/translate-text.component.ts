import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-translate-text',
  templateUrl: './translate-text.component.html',
  styleUrls: ['./translate-text.component.scss']
})
export class TranslateTextComponent implements OnInit {
  @Input() text: string;
  public translated = false;
  constructor() { }

  ngOnInit() {
  }

  onTranslate() {

    const fromLang = 'es';
    const toLang = 'en';
    const text = this.text;
    // api key restricted in google developer console
    const API_KEY = 'AIzaSyCKOeL1RQS5BNIKgPQMuBl8jy30MkuyShA';
    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += '&q=' + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then((response) => {
        this.text = response.data.translations[0].translatedText,
        this.translated = true;

      })
      .catch(error => {
        console.log('There was an error with the translation request: ', error);
        this.translated = false;
      });

  }
}
