export const state = () => ({
  feedback: false
});

export const mutations = {
  setFeedback(state, data) {
    state.feedback = data;
  }
};
