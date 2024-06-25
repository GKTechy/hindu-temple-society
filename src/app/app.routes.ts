import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ReligionsinTempleComponent } from './components/temple/religionsin-temple/religionsin-temple.component';
import { TempleHoursComponent } from './components/temple/temple-hours/temple-hours.component';
import { LocationComponent } from './components/temple/location/location.component';
import { PriestsComponent } from './components/temple/priests/priests.component';
import { HinduismFAQComponent } from './components/temple/hinduism-faq/hinduism-faq.component';
import { NewslettersComponent } from './components/temple/newsletters/newsletters.component';
import { SlokasComponent } from './components/temple/slokas/slokas.component';
import { TempleMilestonesComponent } from './components/temple/temple-milestones/temple-milestones.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'religionsintemple', component: ReligionsinTempleComponent },
    { path: 'temple/TempleHours', component: TempleHoursComponent },
    { path: 'temple/Location', component: LocationComponent },
    { path: 'temple/Priests', component: PriestsComponent },
    { path: 'temple/HinduismFAQ', component: HinduismFAQComponent },
    { path: 'temple/Newsletters', component: NewslettersComponent },
    { path: 'temple/Slokas', component: SlokasComponent },
    { path: 'temple/TempleMilestones', component: TempleMilestonesComponent },
    // { path: '**', redirectTo: '' }
];
