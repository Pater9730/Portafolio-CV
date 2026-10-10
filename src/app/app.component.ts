import { Component } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IntroBannerComponent } from './components/intro-banner/intro-banner.component';
import { ProfileStoryComponent } from './components/profile-story/profile-story.component';
import { CoreStrengthsComponent } from './components/core-strengths/core-strengths.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { CareerTimelineComponent } from './components/career-timeline/career-timeline.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { LearningPathComponent } from './components/learning-path/learning-path.component';
import { ReachOutComponent } from './components/reach-out/reach-out.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopBarComponent,
    IntroBannerComponent,
    ProfileStoryComponent,
    CoreStrengthsComponent,
    TechStackComponent,
    CareerTimelineComponent,
    ProjectShowcaseComponent,
    LearningPathComponent,
    ReachOutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
