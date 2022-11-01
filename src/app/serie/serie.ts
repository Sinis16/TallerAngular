export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  desc: string;
  webpage: string;
  poster: string;

  public constructor(id: number, name: string, channel: string, season: number, desc: string, webpage: string, poster: string) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = season;
    this.desc = desc;
    this.webpage = webpage;
    this.poster = poster;
  }
}
