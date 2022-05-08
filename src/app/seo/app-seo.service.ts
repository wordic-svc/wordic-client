import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as moment from 'moment';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppSeoService {

  constructor(private title: Title, private meta: Meta, @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(DOCUMENT) private document: Document) { }

  setMainSeoData(data: SeoData) {
    this.title.setTitle(data.title)
    this.meta.addTags([
      { name: 'title', content: data.title},
      {
        name: 'keywords',
        content: data.keywords
      },
      { name: 'description', content: data.description},
      { name: 'twitter:card', content: 'Summary' },
      { name: 'twitter:site', content: '@fontwiki' },
      { name: 'twitter:creator', content: '@fontwiki' },
      { name: 'twitter:title', content: data.keywords },
      { name: 'twitter:description', content: data.description},
      { name: 'twitter:image:alt', content: data.description},
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:alt', content: data.title},
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: data.site_name },
      { property: 'og:locale', content: `ko_KR` },
      { property: 'og:title', content: data.title},
      { property: 'og:description', content: data.description},
      { name: 'name', content: data.site_name },
      { name: 'description', content: data.description},
      { rel: 'canonical', href: environment.basePath},
      { property: 'og:url', content: environment.basePath},
      { name: 'twitter:url', content: environment.basePath},
      {
        property: 'og:image',
        content: environment.basePath + '/assets/icon/open_graph.png'
      },
      {
        name: 'twitter:image',
        content: environment.basePath + '/assets/icon/open_graph.png'
      }]
    );

    this.createCanonicalLink(environment.basePath);
    this.createAlternateLink('ko', environment.basePath);
  }


  setSeoData(data: SeoData) {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'author', content: data.author });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:site_name', content: data.site_name });
    this.meta.updateTag({ property: 'og:url', content: data.site_url });
    this.meta.updateTag({ property: 'og:image', content: data.src });
    this.meta.updateTag({ property: 'og:image:alt', content: data.description });
    this.meta.updateTag({ property: 'og:image:width', content: '900' });
    this.meta.updateTag({ property: 'og:image:height', content: '420' });
    this.createAlternateLink(data.lang, data.site_url);
    this.createCanonicalLink(data.site_url);
    // 기존 태그들을 삭제
    this.meta.removeTag("rel='icon'");
    this.meta.removeTag("rel='apple-touch-icon'");
    this.meta.removeTag("rel='manifest'");

    // favicon 및 기타 링크 추가
    this.meta.updateTag({ rel: 'icon', href: 'https://wordic.loeaf.com/assets/icon/favicon.ico' });
    this.meta.updateTag({ rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://wordic.loeaf.com/assets/icon/favicon-16x16.ico' });
    this.meta.updateTag({ rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://wordic.loeaf.com/assets/icon/favicon-32x32.ico' });
    this.meta.updateTag({ rel: 'apple-touch-icon', sizes: '180x180', href: 'https://wordic.loeaf.com/assets/icon/apple-touch-icon.png' });
    this.meta.updateTag({ rel: 'manifest', href: 'https://wordic.loeaf.com/assets/icon/site.webmanifest' });


  }
  private removeAlternateLinkForLocale(locale: string) {
    const existingLinks = this.document.head.querySelectorAll('link[rel="alternate"]');
    existingLinks.forEach((link) => {
      const existingLocale = link.getAttribute('hreflang');
      if (existingLocale === locale) {
        link.remove(); // 이미 해당 locale에 대한 alternate 링크가 존재하면 제거
      }
    });
  }

  private createAlternateLink(locale: string, url: string) {
    this.removeAlternateLinkForLocale(locale); // 이미 있는 링크 제거
    const _link = this.document.createElement('link');
    _link.setAttribute('rel', 'alternate');
    _link.setAttribute('hreflang', locale);
    _link.setAttribute('href', url);
    this.document.head.appendChild(_link);
  }

  private removeCanonicalLink() {
    const existingCanonicalLink = this.document.head.querySelector('link[rel="canonical"]');
    if (existingCanonicalLink) {
      existingCanonicalLink.remove(); // 이미 canonical 링크가 존재하면 제거
    }
  }

  private createCanonicalLink(url: string) {
    this.removeCanonicalLink(); // 이미 있는 링크 제거
    const _canonicalLink = this.document.createElement('link');
    _canonicalLink.setAttribute('rel', 'canonical');
    _canonicalLink.setAttribute('href', url);
    this.document.head.appendChild(_canonicalLink);
  }
  setJsonLd(seoData: SeoData) {
    // JSON-LD 형식으로 데이터 생성
    const currentDateTime = moment().format('YYYY-MM-DDTHH:mm:ssZ');
    var jsonData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": seoData.title,
      "datePublished": "2023-11-07T09:00:00+08:00",
      "dateModified": currentDateTime,
      "name": seoData.title,
      "description": seoData.description,
      "image": seoData.src,
      "author": {
        "@type": "Organization",
        "name": seoData.author
      },
      "keywords": seoData.keywords,
      "url": seoData.site_url // 웹 페이지의 URL을 여기에 넣으세요.
    };

    // 기존 JSON-LD 스크립트 제거
    const existingJsonLdScript = this.document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLdScript) {
      existingJsonLdScript.remove();
    }

    const jsonLdScriptElement = this.document.createElement('script');
    jsonLdScriptElement.type = 'application/ld+json';
    jsonLdScriptElement.textContent = JSON.stringify(jsonData);
    this.document.head.appendChild(jsonLdScriptElement);

    return jsonData;
  }
  // 언어 변경 함수
  changeLanguage(lang: string) {
    this.document.documentElement.lang = lang; // <html> 요소의 lang 속성 변경

  }

}

export interface SeoData {
  author: string;
  keywords: string;
  lang:string;
  title: string;
  description: string;
  site_name: string;
  site_url: string;
  src: string;
}
