import Component from "../Component/Component";
import { type Character } from "../../data/Character/Character";
import { characters } from "../../data/characters";
import CharacterCardComponent from "../CharacterCardComponent/CharacterCardComponent";

class PageComponent extends Component {
  private readonly characters: Character[];

  constructor() {
    super(document.body, "got-dom-app");
    this.characters = characters;
  }

  public render() {
    super.render();
    this.element.innerHTML = `
    <div class="app container">
      <ul class="characters-list row list-unstyled">
        ${this.characters.map(() => '<li class="character col"></li>').join("")}
      </ul>
    </div>
    `;

    this.element
      .querySelectorAll(".character")
      .forEach((characterCardContainer, position) => {
        const characterCardComponent = new CharacterCardComponent(
          characterCardContainer,
          this.characters[position],
          "character__card"
        );
        characterCardComponent.render();
      });
  }
}

export default PageComponent;
