/**
 * `rating-component`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RatingComponent extends Polymer.Element {
    static get is() {
        return 'rating-component';
    }

    static get properties() {
        return {
            rate: {
                type: Number,
                value: 0,
                observer: '__getRate'
            }
        };
    }

    __onClick() {
        console.log('event fired');
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);

        for (const star of stars) {
            console.log(typeof star);
            star.addEventListener('click', () => {
                this.rate = star.id;
            });
        };

    }
    __getRate() {
        this.__onClick()
        const stars = this.shadowRoot.querySelectorAll('.star');
        this.__clearStar(stars);

        for (let index = 0; index < this.rate; index++) {
            const star = stars[index];
            star.classList.add('active');
        };
    }

    __clearStar(stars) {
        for (const star of stars) {
            star.classList.remove('active');
        };
    }
}

window.customElements.define(RatingComponent.is, RatingComponent);
