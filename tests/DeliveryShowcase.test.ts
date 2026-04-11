import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, test, expect, beforeEach } from 'vitest';
import * as cheerio from 'cheerio';
import DeliveryShowcase from '../src/components/DeliveryShowcase.astro';
import { siteConfig } from '../site.config';

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

async function renderShowcase(locale: 'ro' | 'hu' = 'ro') {
  const container = await AstroContainer.create();
  const html = await container.renderToString(DeliveryShowcase, {
    props: { locale },
  });
  return cheerio.load(html);
}

/* ------------------------------------------------------------------ */
/*  Romanian locale (default)                                          */
/* ------------------------------------------------------------------ */

describe('DeliveryShowcase – Romanian (ro)', () => {
  let $: cheerio.CheerioAPI;

  beforeEach(async () => {
    $ = await renderShowcase('ro');
  });

  /* ---------- Section structure ---------- */

  test('renders four top-level sections', () => {
    expect($('section').length).toBe(4);
  });

  /* ---------- Intro section ---------- */

  describe('Intro section', () => {
    test('shows the "Delivery" eyebrow badge', () => {
      const eyebrow = $('span').filter((_i, el) =>
        $(el).text().trim() === 'Delivery'
      );
      expect(eyebrow.length).toBe(1);
    });

    test('displays the Romanian intro title', () => {
      const title = $('h2').first().text().trim();
      expect(title).toBe(
        'Gustul Lyra ajunge și acasă, la birou sau la un prânz comandat rapid.'
      );
    });

    test('displays the Romanian intro description', () => {
      const text = $('section').first().find('p').first().text().trim();
      expect(text).toContain('Delivery-ul este pentru comenzile de zi cu zi');
    });

    test('renders the main hero image with correct src and alt', () => {
      const img = $('section').first().find('img');
      expect(img.attr('src')).toBe('/images/diverse/diverse-2.webp');
      expect(img.attr('alt')).toBe('Delivery Lyra');
    });

    test('hero image loads eagerly', () => {
      const img = $('section').first().find('img');
      expect(img.attr('loading')).toBe('eager');
    });
  });

  /* ---------- CTA buttons (intro) ---------- */

  describe('Intro CTA buttons', () => {
    test('primary button links to the order URL and opens in a new tab', () => {
      const primaryBtn = $('section').first().find('a').filter((_i, el) =>
        $(el).text().trim() === 'Comandă Online'
      );
      expect(primaryBtn.length).toBe(1);
      expect(primaryBtn.attr('href')).toBe(siteConfig.delivery.orderUrl);
      expect(primaryBtn.attr('target')).toBe('_blank');
      expect(primaryBtn.attr('rel')).toContain('noopener');
    });

    test('secondary button links to the Romanian contact page', () => {
      const secondaryBtn = $('section').first().find('a').filter((_i, el) =>
        $(el).text().trim() === 'Contactează-ne'
      );
      expect(secondaryBtn.length).toBe(1);
      expect(secondaryBtn.attr('href')).toBe('/contact/');
    });
  });

  /* ---------- Info-points section ---------- */

  describe('Info-points section', () => {
    test('renders exactly three info cards', () => {
      const articles = $('article');
      expect(articles.length).toBe(3);
    });

    test('first card has the correct title', () => {
      const title = $('article').first().find('h3').text().trim();
      expect(title).toBe('Pentru comenzi rapide, de zi cu zi');
    });

    test('second card has the correct title', () => {
      const title = $('article').eq(1).find('h3').text().trim();
      expect(title).toBe('Disponibil zilnic între 10:00 și 22:00');
    });

    test('third card has the correct title', () => {
      const title = $('article').eq(2).find('h3').text().trim();
      expect(title).toBe('Diferit de catering');
    });

    test('each card has a description paragraph', () => {
      $('article').each((_i, el) => {
        const p = $(el).find('p');
        expect(p.length).toBe(1);
        expect(p.text().trim().length).toBeGreaterThan(0);
      });
    });
  });

  /* ---------- Gallery section ---------- */

  describe('Gallery section', () => {
    test('renders four gallery images', () => {
      const gallerySection = $('section').eq(2);
      const images = gallerySection.find('img');
      expect(images.length).toBe(4);
    });

    test('gallery images use lazy loading', () => {
      const gallerySection = $('section').eq(2);
      gallerySection.find('img').each((_i, el) => {
        expect($(el).attr('loading')).toBe('lazy');
      });
    });

    test('gallery images reference the diverse folder', () => {
      const gallerySection = $('section').eq(2);
      gallerySection.find('img').each((_i, el) => {
        expect($(el).attr('src')).toMatch(/^\/images\/diverse\/diverse-\d\.webp$/);
      });
    });

    test('gallery images have Romanian alt text', () => {
      const gallerySection = $('section').eq(2);
      const alts = gallerySection.find('img').map((_i, el) => $(el).attr('alt')).get();
      expect(alts).toEqual([
        'Preparat Lyra pregătit pentru comandă',
        'Preparat pentru delivery',
        'Detaliu preparat Lyra',
        'Preparat pregătit de livrare',
      ]);
    });
  });

  /* ---------- Bottom CTA section ---------- */

  describe('Bottom CTA section', () => {
    test('displays the Romanian CTA title', () => {
      const ctaSection = $('section').eq(3);
      const title = ctaSection.find('h2').text().trim();
      expect(title).toBe('Vrei să comanzi acum?');
    });

    test('displays the Romanian CTA description', () => {
      const ctaSection = $('section').eq(3);
      const desc = ctaSection.find('p').text().trim();
      expect(desc).toContain('Intră în comanda online');
    });

    test('CTA primary button links to order URL with target _blank', () => {
      const ctaSection = $('section').eq(3);
      const primaryBtn = ctaSection.find('a').filter((_i, el) =>
        $(el).text().trim() === 'Comandă Online'
      );
      expect(primaryBtn.attr('href')).toBe(siteConfig.delivery.orderUrl);
      expect(primaryBtn.attr('target')).toBe('_blank');
      expect(primaryBtn.attr('rel')).toContain('noopener');
    });

    test('CTA secondary button links to the Romanian contact page', () => {
      const ctaSection = $('section').eq(3);
      const secondaryBtn = ctaSection.find('a').filter((_i, el) =>
        $(el).text().trim() === 'Contactează-ne'
      );
      expect(secondaryBtn.attr('href')).toBe('/contact/');
    });

    test('CTA section has a background image', () => {
      const ctaSection = $('section').eq(3);
      const bgDiv = ctaSection.find('div[style]').first();
      expect(bgDiv.attr('style')).toContain('/images/exterior/exterior-3.webp');
    });
  });
});

/* ------------------------------------------------------------------ */
/*  Hungarian locale                                                   */
/* ------------------------------------------------------------------ */

describe('DeliveryShowcase – Hungarian (hu)', () => {
  let $: cheerio.CheerioAPI;

  beforeEach(async () => {
    $ = await renderShowcase('hu');
  });

  /* ---------- Intro section ---------- */

  describe('Intro section', () => {
    test('shows the "Kiszállítás" eyebrow badge', () => {
      const eyebrow = $('span').filter((_i, el) =>
        $(el).text().trim() === 'Kiszállítás'
      );
      expect(eyebrow.length).toBe(1);
    });

    test('displays the Hungarian intro title', () => {
      const title = $('h2').first().text().trim();
      expect(title).toBe(
        'A Lyra ízei otthonra, irodába vagy gyors ebédszünetre.'
      );
    });

    test('displays the Hungarian intro description', () => {
      const text = $('section').first().find('p').first().text().trim();
      expect(text).toContain('A delivery a mindennapi rendelésekre való');
    });

    test('hero image has Hungarian alt text', () => {
      const img = $('section').first().find('img');
      expect(img.attr('alt')).toBe('Lyra kiszállítás');
    });
  });

  /* ---------- CTA buttons (intro) ---------- */

  describe('Intro CTA buttons', () => {
    test('primary button label is in Hungarian', () => {
      const primaryBtn = $('section').first().find('a').filter((_i, el) =>
        $(el).text().trim() === 'Online rendelés'
      );
      expect(primaryBtn.length).toBe(1);
      expect(primaryBtn.attr('href')).toBe(siteConfig.delivery.orderUrl);
    });

    test('secondary button links to the Hungarian contact page', () => {
      const secondaryBtn = $('section').first().find('a').filter((_i, el) =>
        $(el).text().trim() === 'Kapcsolat'
      );
      expect(secondaryBtn.length).toBe(1);
      expect(secondaryBtn.attr('href')).toBe('/hu/contact/');
    });
  });

  /* ---------- Info-points section ---------- */

  describe('Info-points section', () => {
    test('renders three info cards with Hungarian titles', () => {
      const titles = $('article h3').map((_i, el) => $(el).text().trim()).get();
      expect(titles).toEqual([
        'Gyors napi rendelésekhez',
        '10:00 és 22:00 között',
        'Nem ugyanaz, mint a catering',
      ]);
    });

    test('each card has Hungarian description text', () => {
      $('article').each((_i, el) => {
        const p = $(el).find('p');
        expect(p.length).toBe(1);
        expect(p.text().trim().length).toBeGreaterThan(0);
      });
    });
  });

  /* ---------- Gallery section ---------- */

  describe('Gallery section', () => {
    test('gallery images have Hungarian alt text', () => {
      const gallerySection = $('section').eq(2);
      const alts = gallerySection
        .find('img')
        .map((_i, el) => $(el).attr('alt')?.normalize('NFC'))
        .get();
      const expected = [
        'Lyra fogas kiszállításhoz',
        'Etel rendeléshez',
        'Lyra etelreszlet',
        'Rendeles hangulat',
      ].map((s) => s.normalize('NFC'));
      expect(alts).toEqual(expected);
    });
  });

  /* ---------- Bottom CTA section ---------- */

  describe('Bottom CTA section', () => {
    test('displays the Hungarian CTA title', () => {
      const ctaSection = $('section').eq(3);
      const title = ctaSection.find('h2').text().trim();
      expect(title).toBe('Rendelnél most?');
    });

    test('CTA primary button uses Hungarian label', () => {
      const ctaSection = $('section').eq(3);
      const primaryBtn = ctaSection.find('a').filter((_i, el) =>
        $(el).text().trim() === 'Online rendelés'
      );
      expect(primaryBtn.length).toBe(1);
      expect(primaryBtn.attr('href')).toBe(siteConfig.delivery.orderUrl);
    });

    test('CTA secondary button links to Hungarian contact page', () => {
      const ctaSection = $('section').eq(3);
      const secondaryBtn = ctaSection.find('a').filter((_i, el) =>
        $(el).text().trim() === 'Kapcsolat'
      );
      expect(secondaryBtn.attr('href')).toBe('/hu/contact/');
    });
  });
});

/* ------------------------------------------------------------------ */
/*  Default locale behaviour                                           */
/* ------------------------------------------------------------------ */

describe('DeliveryShowcase – defaults', () => {
  test('defaults to Romanian when no locale prop is passed', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(DeliveryShowcase);
    const $ = cheerio.load(html);

    // Should render Romanian eyebrow
    const eyebrow = $('span').filter((_i, el) =>
      $(el).text().trim() === 'Delivery'
    );
    expect(eyebrow.length).toBe(1);
  });

  test('order URL matches siteConfig.delivery.orderUrl', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(DeliveryShowcase, {
      props: { locale: 'ro' },
    });
    const $ = cheerio.load(html);
    const orderLinks = $(`a[href="${siteConfig.delivery.orderUrl}"]`);
    // Two order links: one in intro section, one in CTA section
    expect(orderLinks.length).toBe(2);
    orderLinks.each((_i, el) => {
      expect($(el).attr('target')).toBe('_blank');
      expect($(el).attr('rel')).toContain('noopener');
      expect($(el).attr('rel')).toContain('noreferrer');
    });
  });
});
