import { type Character } from "../../data/Character/Character";
import Component from "../Component/Component";

class CharacterCardComponent extends Component {
  private readonly character: Character;

  constructor(parentElement: Element, character: Character, className = "") {
    super(parentElement, `card ${className}`);
    this.character = character;
  }

  public render() {
    super.render();

    this.element.innerHTML = `
      <img src="img/${this.character.characterData.imageSource}" alt="${this.character.characterData.name} ${this.character.characterData.family}" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family}</h2>
        <div class="character__info">
            <ul class="list-unstyled">
            </ul>
        </div>
      </div>
    `;
  }
}

export default CharacterCardComponent;
