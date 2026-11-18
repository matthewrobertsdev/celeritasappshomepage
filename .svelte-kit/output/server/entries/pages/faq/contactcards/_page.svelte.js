import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as AppHeading } from "../../../../chunks/AppHeading.js";
import { c as contactCardsAppIcon } from "../../../../chunks/ContactCardsAppIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1flg2ib_START -->${$$result.title = `<title>Celeritas Apps | Contact Cards FAQ</title>`, ""}<meta name="description" content="Contact Cards FAQ"><!-- HEAD_svelte-1flg2ib_END -->`, ""} ${validate_component(AppHeading, "AppHeading").$$render(
    $$result,
    {
      imgSrc: contactCardsAppIcon,
      ariaLabel: "Contact Cards FAQ"
    },
    {},
    {
      default: () => {
        return `Contact Cards FAQ`;
      }
    }
  )} <h2 class="left-h2" data-svelte-h="svelte-1ha9z15">How is a contact shared from Contact Cards?</h2> <p class="body-p" data-svelte-h="svelte-1v4flf4">The contact is shared either virtually or by QR code. Either way, the information is stored in the vCard format, which works across device types. Sharing with devices outside of those made by Apple should not be a problem. Please note that QR codes can only hold so much data so an extremely long contact may be unsharable by QR code. Also, some smart phones may require the user to download a bar code scanner to scan a QR code.</p> <h2 class="left-h2" data-svelte-h="svelte-10c0kdz">How do I make sure my data is synced with iCloud?</h2> <p class="body-p" data-svelte-h="svelte-1un37ac">Make sure you are logged into iCloud on the device you wish to sync and give it time to sync. You probably already are logged in. Also, in Settings in iOS or System Preferences on Mac, under Apple ID, make sure you have not disabled iCloud usage for Contact Cards. You would probably remember if you had done this.</p> <h2 class="left-h2" data-svelte-h="svelte-1cxk2gs">How do I disable syncing Contact Cards with iCloud?</h2> <p class="body-p" data-svelte-h="svelte-1i0edui">On iOS, open Settings, go to Apple ID, then select iCloud, and then scroll down untill you reach Contact Cards and flip the switch turn the toggle off. On Mac, open System Preferences, select Apple ID, and then select iCloud, and then select &quot;Options...&quot; by iCloud Drive, and then scroll to Contact Cards, and deselect the checkbox by it.</p> <h2 class="left-h2" data-svelte-h="svelte-1r4rgxa">How do I share a card virtually on Mac?</h2> <p class="body-p" data-svelte-h="svelte-1athaxd">There are multiple ways to do so, depending on your use case. You can select the share button in the toolbar or navigate to the &quot;Share&quot; menu item under the &quot;Card&quot; menu, and then share by Messages, Mail, or Airdrop. You can also select a card, copy the vCard, and paste it directly into an app that supports recieving pasted vCards, such as Gmail. You can also drag and drop a card from your list of cards to the desktop or a folder and then drag and drop it to an app that supports dropping in vCards, such as Outlook, or add it as an attachment. Lastly, you can go to the File menu, select &quot;Export as vCard...&quot;, and then save it to a file that may be added as an attachment or dragged and dropped into an app as allowed by the app.</p> <h2 class="left-h2" data-svelte-h="svelte-uvaocl">How do I delete my data from iCloud?</h2> <p class="body-p" data-svelte-h="svelte-1me5sp3">Make sure Contact Cards on your device is synced with iCloud. Then, tap the gear button on iOS beneath your list of cards, or click the gear button in the toolbar on your Mac or the &quot;Manage Data...&quot; menu item under the File menu. From there, select &quot;Delete All Cards from iCloud...&quot;, type &quot;delete&quot; in the text filed to confirm you wish to delete all cards, which can&#39;t be undone, and then select &quot;Delete All Cards from iCloud&quot;. All Contact Cards will be deleted from iCloud (provided you are connected to the internet), and will be erased from your other devices when they sync.</p> <br> <br> <br> <br>`;
});
export {
  Page as default
};
