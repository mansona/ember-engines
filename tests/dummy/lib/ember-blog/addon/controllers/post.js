import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['lang'],

  actions: {
    goHomeProgrammatically() {
      this.transitionToExternalRoute('home').then(() => {
        set(this, 'transitionedToRouteExternal', true);
      });
    },
  }
});
