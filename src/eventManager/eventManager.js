import handleSubmit from './formSubmit/formSubmit';

export default function eventManager() {
  const manager = {
    init() {
      this.handleFormSubmit();
    },
    handleFormSubmit() {
      handleSubmit();
    },
  };
  return manager.init();
}
