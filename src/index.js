import list from "./data/list.js";
import letterIndex from "./data/letter-index.js";
import adjectivesIndices from "./data/indices/adjectives.js";
import armsIndices from "./data/indices/arms.js";
import attiresIndices from "./data/indices/attires.js";
import brandsIndices from "./data/indices/brands.js";
import carsIndices from "./data/indices/cars.js";
import citiesIndices from "./data/indices/cities.js";
import coldWarIndices from "./data/indices/cold-war.js";
import commonNounsIndices from "./data/indices/common-nouns.js";
import drinksIndices from "./data/indices/drinks.js";
import drugsIndices from "./data/indices/drugs.js";
import establishmentsIndices from "./data/indices/establishments.js";
import loanwordsIndices from "./data/indices/loanwords.js";
import locationsIndices from "./data/indices/locations.js";
import madeUpIndices from "./data/indices/made-up.js";
import mediaReferencesIndices from "./data/indices/media-references.js";
import musicIndices from "./data/indices/music.js";
import musiciansIndices from "./data/indices/musicians.js";
import neighborhoodsIndices from "./data/indices/neighborhoods.js";
import newYorkIndices from "./data/indices/new-york.js";
import nicknamesIndices from "./data/indices/nicknames.js";
import peopleIndices from "./data/indices/people.js";
import plantsIndices from "./data/indices/plants.js";
import restaurantsIndices from "./data/indices/restaurants.js";
import scienceIndices from "./data/indices/science.js";
import slangsIndices from "./data/indices/slangs.js";
import spiritualIndices from "./data/indices/spiritual.js";
import streetsIndices from "./data/indices/streets.js";
import townsIndices from "./data/indices/towns.js";
import vehiclesIndices from "./data/indices/vehicles.js";
import verbsIndices from "./data/indices/verbs.js";
import weaponsIndices from "./data/indices/weapons.js";

/**
 * A Steely Dan word catalog
 */
export default class MajorWords {
  /**
   * @returns {string[]} All words
   */
  static get all() { return list }

  /**
   * @param {string} letter - A single letter
   * @returns {string[]} Words starting with letter
   */
  static startingWith(letter) {
    if (letter.length !== 1 || !letter.match(/[a-z]/i)) throw new Error("Argument must be a single letter");

    letter = letter.toLowerCase();

    const startIndex = letterIndex[letter];

    if (startIndex === undefined) return []; // no words starting with the given letter

    const letters = Object.keys(letterIndex);
    const nextLetter = letters.at(letters.indexOf(letter) + 1);
    const endIndex = letterIndex[nextLetter];

    return list.slice(startIndex, endIndex);
  }

  /**
   * @returns {string[]} All adjectives in word list
   */
  static get adjectives() { return this.#wordsAtIndices(adjectivesIndices) }

  /**
   * @returns {string[]} All arms-related terms in word list
   */
  static get arms() { return this.#wordsAtIndices(armsIndices) }

  /**
   * @returns {string[]} All attires in word list
   */
  static get attires() { return this.#wordsAtIndices(attiresIndices) }

  /**
   * @returns {string[]} All brands in word list
   */
  static get brands() { return this.#wordsAtIndices(brandsIndices) }

  /**
   * @returns {string[]} All cars in word list
   */
  static get cars() { return this.#wordsAtIndices(carsIndices) }

  /**
   * @returns {string[]} All city names in word list
   */
  static get cities() { return this.#wordsAtIndices(citiesIndices) }

  /**
   * @returns {string[]} All Cold War-related terms in word list
   */
  static get coldWar() { return this.#wordsAtIndices(coldWarIndices) }

  /**
   * @returns {string[]} All drinks in word list
   */
  static get drinks() { return this.#wordsAtIndices(drinksIndices) }

  /**
   * @returns {string[]} All drugs in word list
   */
  static get drugs() { return this.#wordsAtIndices(drugsIndices) }

  /**
   * @returns {string[]} All establishments in word list
   */
  static get establishments() { return this.#wordsAtIndices(establishmentsIndices) }

  /**
   * @returns {string[]} All loanwords in word list
   */
  static get loanwords() { return this.#wordsAtIndices(loanwordsIndices) }

  /**
   * @returns {string[]} All locations in word list
   */
  static get locations() { return this.#wordsAtIndices(locationsIndices) }

  /**
   * @returns {string[]} All made-up terms by Steely Dan in word list
   */
  static get madeUp() { return this.#wordsAtIndices(madeUpIndices) }

  /**
   * @returns {string[]} All media references in word list
   */
  static get mediaReferences() { return this.#wordsAtIndices(mediaReferencesIndices) }

  /**
   * @returns {string[]} All music-related terms in word list
   */
  static get music() { return this.#wordsAtIndices(musicIndices) }

  /**
   * @returns {string[]} All names of real musicians in word list
   */
  static get musicians() { return this.#wordsAtIndices(musiciansIndices) }

  /**
   * @returns {string[]} All neighborhoods in word list
   */
  static get neighborhoods() { return this.#wordsAtIndices(neighborhoodsIndices) }

  /**
   * @returns {string[]} All locations within New York State in word list
   */
  static get newYork() { return this.#wordsAtIndices(newYorkIndices) }

  /**
   * @returns {string[]} All nicknames in word list
   */
  static get nicknames() { return this.#wordsAtIndices(nicknamesIndices) }

  /**
   * @returns {string[]} All common nouns in word list
   */
  static get nouns() { return this.#wordsAtIndices(commonNounsIndices) }

  /**
   * @returns {string[]} All names of real people in word list
   */
  static get people() { return this.#wordsAtIndices(peopleIndices) }

  /**
   * @returns {string[]} All plants in word list
   */
  static get plants() { return this.#wordsAtIndices(plantsIndices) }

  /**
   * @returns {string[]} All restaurants in word list
   */
  static get restaurants() { return this.#wordsAtIndices(restaurantsIndices) }

  /**
   * @returns {string[]} All science-related terms in word list
   */
  static get science() { return this.#wordsAtIndices(scienceIndices) }

  /**
   * @returns {string[]} All slangs in word list
   */
  static get slangs() { return this.#wordsAtIndices(slangsIndices) }

  /**
   * @returns {string[]} All spiritual words in word list
   */
  static get spiritual() { return this.#wordsAtIndices(spiritualIndices) }

  /**
   * @returns {string[]} All street names in word list
   */
  static get streets() { return this.#wordsAtIndices(streetsIndices) }

  /**
   * @returns {string[]} All town names in word list
   */
  static get towns() { return this.#wordsAtIndices(townsIndices) }

  /**
   * @returns {string[]} All vehicles in word list
   */
  static get vehicles() { return this.#wordsAtIndices(vehiclesIndices) }

  /**
   * @returns {string[]} All verbs in word list
   */
  static get verbs() { return this.#wordsAtIndices(verbsIndices) }

  /**
   * @returns {string[]} All weapons in word list
   */
  static get weapons() { return this.#wordsAtIndices(weaponsIndices) }

  // private
    /**
     * @param {number[]} indices - Indices of words
     * @returns {string[]} Words at indices
     */
    static #wordsAtIndices(indices) { return indices.map(index => list[index]) }
}
