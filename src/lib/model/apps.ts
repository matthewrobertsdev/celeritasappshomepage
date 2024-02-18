import clockSuiteAppIcon from '$lib/images/ClockSuiteAppIcon.png';
import filterArtAppIcon from '$lib/images/FilterArtAppIcon.png';
import spiffyClockAppIcon from '$lib/images/SpiffyClockAppIcon.png';
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

export const apps = [
  new AppModel("Clock Suite", "clocksuite", clockSuiteAppIcon),
  new AppModel("Filter Art", "filterart", filterArtAppIcon),
  new AppModel("Spiffy Clock", "spiffyclock", spiffyClockAppIcon),
  new AppModel("Contact Cards", "contactcards", contactCardsAppIcon)
]