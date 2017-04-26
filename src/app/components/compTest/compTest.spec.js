import CompTestModule from './compTest'
import CompTestController from './compTest.controller';
import CompTestComponent from './compTest.component';
import CompTestTemplate from './compTest.html';

describe('CompTest', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CompTestModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CompTestController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CompTestTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CompTestComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CompTestTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CompTestController);
      });
  });
});
