import { c as clockSuiteAppIcon, a as clockSuiteAppIconDark } from "./ClockSuiteAppIconDark.js";
import { s as spiffyClockAppIcon, a as spiffyClockAppIconDark } from "./SpiffyClockAppIconDark.js";
import { c as celebrationLightsAppIcon } from "./CelebrationLightsAppIcon.js";
class AppModel {
  constructor(name, path, appIcon, darkModeAppIcon) {
    this.name = "";
    this.path = "";
    this.appIcon = "";
    this.darkModeAppIcon = "";
    this.name = name;
    this.path = path;
    this.appIcon = appIcon;
    this.darkModeAppIcon = darkModeAppIcon;
  }
}
const clockSuite = new AppModel("Clock Suite", "clocksuite", clockSuiteAppIcon, clockSuiteAppIconDark);
const spiffyClock = new AppModel("Spiffy Clock", "spiffyclock", spiffyClockAppIcon, spiffyClockAppIconDark);
const celebrationslights = new AppModel("Light Joy", "lightjoy", celebrationLightsAppIcon, celebrationLightsAppIcon);
const apps = [
  clockSuite,
  spiffyClock,
  celebrationslights
];
const currentApps = [
  clockSuite,
  spiffyClock,
  celebrationslights
];
export {
  apps as a,
  currentApps as c
};
