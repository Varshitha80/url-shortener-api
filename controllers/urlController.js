import Url from '../models/Url.js';
import { nanoid } from 'nanoid';
import validateUrl from '../utils/validateUrl.js';


export const createshorturl = async (req, res) => {
  const baseUrl = process.env.BASE_URL;
  const { url, expiresIn } = req.body;

  if (!validateUrl(url)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  const shortcode = nanoid(6);
  const shorturl = `${baseUrl}/${shortcode}`;

  const newurl = new Url({
    originalurl: url,
    shortcode,
    expiresat: expiresIn ? new Date(Date.now() + expiresIn * 1000) : undefined
  });

  await newurl.save();
  res.json({ shorturl });
};

export const redirecttooriginal = async (req, res) => {
  const { code } = req.params;
  const urlentry = await Url.findOne({ shortcode: code });

  if (!urlentry) {
    return res.status(400).json({ error: 'Short URL not found' });
  }

  if (urlentry.expiresat && urlentry.expiresat < Date.now()) {
    return res.status(410).json({ error: 'Short URL expired' });
  }

  urlentry.clicks += 1;
  await urlentry.save();

  res.redirect(urlentry.originalurl);
};
