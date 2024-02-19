import clockSuiteAppIcon from '$lib/images/ClockSuiteAppIcon.png';
import filterArtAppIcon from '$lib/images/FilterArtAppIcon.png';
import spiffyClockAppIcon from '$lib/images/SpiffyClockAppIcon.png';
import learnFlexAppIcon from '$lib/images/LearnFlexAppIcon.png';
import contactCardsAppIcon from '$lib/images/ContactCardsAppIcon.png';

class AppModel {
  name = ""
  path = ""
  appIcon = ""

  constructor(name: string, path: string, appIcon: string) {
    this.name = name
    this.path = path
    this.appIcon = appIcon
  }
}

const clockSuite = new AppModel("Clock Suite", "clocksuite", clockSuiteAppIcon)
const filterArt = new AppModel("Filter Art", "filterart", filterArtAppIcon)
const spiffyClock = new AppModel("Spiffy Clock", "spiffyclock", spiffyClockAppIcon)
const learnFlex = new AppModel("Learn Flex", "learnflex", learnFlexAppIcon)
const contactCards = new AppModel("Contact Cards", "contactcards", contactCardsAppIcon)

export const apps = [
  clockSuite,
  filterArt,
  spiffyClock,
  learnFlex,
  contactCards
]

export const currentApps = [
  clockSuite,
  filterArt,
  spiffyClock,
  learnFlex,
]