import clockSuiteAppIcon from '$lib/images/ClockSuiteAppIcon.png';
import clockSuiteAppIconDark from '$lib/images/ClockSuiteAppIconDark.png';
import spiffyClockAppIcon from '$lib/images/SpiffyClockAppIcon.png';
import spiffyClockAppIconDark from '$lib/images/SpiffyClockAppIconDark.png';
import celebrationLightsAppIcon from '$lib/images/CelebrationLightsAppIcon.png';


class AppModel {
  name = ""
  path = ""
  appIcon = ""
  darkModeAppIcon = ""

  constructor(name: string, path: string, appIcon: string, darkModeAppIcon: string) {
    this.name = name
    this.path = path
    this.appIcon = appIcon
    this.darkModeAppIcon = darkModeAppIcon
  }
}

const clockSuite = new AppModel("Clock Suite", "clocksuite", clockSuiteAppIcon, clockSuiteAppIconDark)
const spiffyClock = new AppModel("Spiffy Clock", "spiffyclock", spiffyClockAppIcon, spiffyClockAppIconDark)
const celebrationslights = new AppModel("Light Joy", "lightjoy", celebrationLightsAppIcon, celebrationLightsAppIcon)

export const apps = [
  clockSuite,
  spiffyClock,
  celebrationslights,
]

export const currentApps = [
  clockSuite,
  spiffyClock,
  celebrationslights,
]