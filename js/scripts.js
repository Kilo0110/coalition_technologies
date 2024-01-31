const accordionTabControlsList = Array.from(
  document.querySelectorAll('.team-section__accordion-tab')
);

const accordionTabPanelsList = Array.from(
  document.querySelectorAll('.team-section__accordion-panel')
);

accordionTabControlsList.forEach((tabControl) => {
  tabControl.addEventListener('click', () => {
    if (tabControl.classList.contains('active')) {
      return;
    } else {
      // Add the active class to the tab control clicked
      tabControl.classList.add('active');

      // Remove the active class from any previously active tab control
      accordionTabControlsList
        .filter((button) => button !== tabControl)[0]
        .classList.remove('active');

      let targetTabPanelID = tabControl.getAttribute('aria-controls');

      let targetTabPanel = accordionTabPanelsList.filter(
        (panel) => panel.id === targetTabPanelID
      )[0];

      // Fallback for browsers that don't support View Transitions:
      if (!document.startViewTransition) {
        // Remove the active class from any previously active tab panel
        accordionTabPanelsList
          .filter((panel) => panel.id !== targetTabPanelID)[0]
          .classList.remove('active');

        // Add the active class to the target tab panel
        targetTabPanel.classList.add('active');
        return;
      }

      // With View Transitions:
      document.startViewTransition(() => {
        // Remove the active class from any previously active tab panel
        accordionTabPanelsList
          .filter((panel) => panel.id !== targetTabPanelID)[0]
          .classList.remove('active');

        // Add the active class to the target tab panel
        targetTabPanel.classList.add('active');
      });
    }
  });
});
