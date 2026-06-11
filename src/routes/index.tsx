import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Github, Database, Play } from "lucide-react";

const TITLE = "Few-Shot Adaptation of Vision-Language-Action Models for Generalist Robot Manipulation";
const SHORT = "Few-shot adaptation of VLA models with real-world and simulation results.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: SHORT },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SHORT },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Index,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-rule/60 bg-card/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </span>
  );
}

function LinkBtn({
  href, icon: Icon, children,
}: { href: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-ink/80 bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-accent hover:border-accent"
    >
      <Icon className="h-4 w-4" />
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-t border-rule/70 pt-8">
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{kicker}</span>
      <h2 className="font-serif text-3xl md:text-4xl leading-[1.05] text-foreground">{title}</h2>
    </div>
  );
}

const realTasks = [
  { img: "/assets/bag_success.mp4", task: "Pick up the mug and place it on the coaster", success: "8 / 10", shots: 5, baseVideo: "/assets/aloha_gif/bag_failed.mp4", focaVideo: "/assets/aloha_gif/bag_success.mp4" },
  { img: "/assets/shoe_failed.mp4", task: "Pick up the mug and place it on the coaster", success: "8 / 10", shots: 5, baseVideo: "/assets/aloha_gif/shoes_success.mp4", focaVideo: "/assets/aloha_gif/shoes_success.mp4" },
  { img: "/assets/table_failed.mp4", task: "Stack the red block on the blue block", success: "9 / 10", shots: 5, baseVideo: "/assets/aloha_gif/table_failed.mp4", focaVideo: "/assets/aloha_gif/table_success.mp4"},
];
const simTasks = [
  { img: "/assets/libero_bowl.png", task: "Open the top drawer and place the bowl inside", success: "94%", shots: 10 },
  { img: "/assets/libero_soup.png", task: "Sort cubes by color into matching bins", success: "88%", shots: 10 },
];

const baselineRows = [
  { method: "Control-VLA",  d100: "95.6", d40: "91.3", d10: "78.4" },
  { method: "LoRA (r=64)",  d100: "94.2", d40: "90.2", d10: "78.2" },
  { method: "DoRA (r=64)",  d100: "94.7", d40: "92.0", d10: "78.6" },
  { method: "FOCA",         d100: "96.6", d40: "94.0", d10: "85.3", best: true },
];

function Index() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>NeurIPS 2026 · Under Review</Pill>
            <Pill>Robot Learning</Pill>
            <Pill>Vision-Language-Action</Pill>
          </div>

          <h1 className="mt-8 font-serif text-4xl leading-[1.04] tracking-tight md:text-6xl">
            Few-Shot Adaptation of <span className="text-accent">Vision-Language-Action</span> Models
            <span className="block text-muted-foreground text-3xl md:text-4xl mt-3 font-normal italic">
              learning new manipulation skills from a handful of demonstrations
            </span>
          </h1>

          {/* authors */}
          <div className="mt-8 max-w-3xl text-base text-foreground/90">
            <p className="leading-relaxed">
              <a className="hover:text-accent" href="#">Author One</a><sup className="text-accent">1</sup>,{" "}
              <a className="hover:text-accent" href="#">Author Two</a><sup className="text-accent">1,2</sup>,{" "}
              <a className="hover:text-accent" href="#">Author Three</a><sup className="text-accent">2</sup>,{" "}
              <a className="hover:text-accent" href="#">Author Four</a><sup className="text-accent">1</sup>,{" "}
              <a className="hover:text-accent" href="#">Senior Author</a><sup className="text-accent">1,3</sup>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <sup className="text-accent">1</sup>Your University &nbsp;·&nbsp;
              <sup className="text-accent">2</sup>Partner Lab &nbsp;·&nbsp;
              <sup className="text-accent">3</sup>Industry Collaborator
            </p>
          </div>

          {/* links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkBtn href="#" icon={FileText}>Paper</LinkBtn>
            <LinkBtn href="#" icon={FileText}>arXiv</LinkBtn>
            <LinkBtn href="#" icon={Github}>Code</LinkBtn>
            <LinkBtn href="#" icon={Database}>Dataset</LinkBtn>
            <LinkBtn href="#" icon={Play}>Video</LinkBtn>
          </div>
        </div>

        {/* hero figure */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <figure className="overflow-hidden rounded-xl border border-rule/70 bg-card shadow-sm">
            <img
              src="/assets/FOCA.png"
              alt="Robotic manipulator reaching for an object on a gridded surface."
              width={1600}
              height={900}
              className="w-full"
            />
            <figcaption className="border-t border-rule/70 px-5 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Figure 1 — Our policy adapts to new objects, scenes, and instructions from as few as five demonstrations.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ABSTRACT */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Abstract" title="Generalist robots, specialist behaviors — without retraining the world." />
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-4 text-sm">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Trainable params</div>
              <div className="font-serif text-3xl text-accent">4.2 M</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Demos per task</div>
              <div className="font-serif text-3xl">5 – 10</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Real-world success</div>
              <div className="font-serif text-3xl">84%</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Sim success</div>
              <div className="font-serif text-3xl">91%</div>
            </div>
          </aside>

          <div className="font-serif text-lg leading-[1.7] text-foreground/90">
            <p>
              Vision-Language-Action (VLA) models trained on internet-scale data exhibit broad, generalist
              capabilities, yet they routinely <em>fail</em> on specific downstream tasks defined by a
              particular embodiment, environment, or user. Full fine-tuning recovers performance but is
              expensive, brittle, and forgets prior skills.
            </p>
            <p className="mt-4">
              We introduce a parameter-efficient few-shot adaptation procedure that injects small task-specific
              modulation streams into a frozen VLA backbone. Given as few as five demonstrations, our method
              acquires reliable new behaviors while preserving zero-shot generalization on held-out instructions.
              We evaluate across two simulated benchmarks and a real 7-DoF manipulator on twelve unseen tasks.
            </p>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Method" title="A frozen backbone, a whisper of new parameters." />
        <figure className="overflow-hidden rounded-xl border border-rule/70 bg-card">
          {/* <img
            src={teaser}
            alt="Diagram of the few-shot adaptation pipeline: image input, language encoder, transformer policy, action output."
            width={1600}
            height={700}
            loading="lazy"
            className="w-full"
          /> */}
          <video
            className="w-full rounded-lg"
            autoPlay
            loop
            playsInline
            controls
          >
            <source src="/assets/teaser.mp4" type="video/mp4" />
          </video>
          <figcaption className="border-t border-rule/70 px-5 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Figure 2 — Adapter modules (orange) are inserted between attention blocks and trained on the demos.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Demonstration collection", b: "5–10 teleoperated demos per task, recorded with synchronized RGB and proprioception streams." },
            { n: "02", t: "Adapter insertion", b: "Lightweight bottleneck adapters are injected at every transformer block of the action decoder." },
            { n: "03", t: "Few-shot optimization", b: "A short curriculum trains only the adapters with behavior cloning plus an action-consistency regularizer." },
          ].map((s) => (
            <article key={s.n} className="rounded-lg border border-rule/60 bg-card/60 p-5">
              <div className="text-[11px] uppercase tracking-[0.22em] text-accent">Step {s.n}</div>
              <h3 className="mt-2 font-serif text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </article>
          ))}
        </div>
      </section>

      {/* REAL-WORLD */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Results · Real World" title="Twelve unseen tasks on a Franka Panda." />
        <div className="grid gap-6">
          {realTasks.map((r) => (
            // <figure key={r.task} className="overflow-hidden rounded-xl border border-rule/70 bg-card">
            //   <img src={r.img} alt={r.task} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            //   <figcaption className="flex items-center justify-between gap-4 border-t border-rule/70 px-5 py-4">
            //     <span className="text-sm font-medium">{r.task}</span>
            //     <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            //       <span>{r.shots} demos</span>
            //       <span className="font-serif text-base normal-case tracking-normal text-accent">{r.success}</span>
            //     </div>
            //   </figcaption>
            // </figure>

              <figure
                key={r.task}
                className="overflow-hidden rounded-xl border border-rule/70 bg-card"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <span className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-3 py-1.5 text-sm font-semibold text-white">
                      Base VLA
                    </span>

                    <video
                      className="w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={r.baseVideo} type="video/mp4" />
                    </video>
                  </div>

                  <div className="relative">
                    <span className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-3 py-1.5 text-sm font-semibold text-white">
                      FOCA
                    </span>

                    <video
                      className="w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={r.focaVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>

                <figcaption className="flex items-center justify-between gap-4 border-t border-rule/70 px-5 py-4">
                  <span className="text-sm font-medium">{r.task}</span>

                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{r.shots} demos</span>

                    <span className="font-serif text-base normal-case tracking-normal text-accent">
                      {r.success}
                    </span>
                  </div>
                </figcaption>
              </figure>
          ))}
        </div>
      </section>


      {/* SIMULATION */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Results · Simulation" title="LIBERO-Long and a custom kitchen benchmark." />
        <div className="grid gap-6 md:grid-cols-2">
          {simTasks.map((r) => (
            <figure key={r.task} className="overflow-hidden rounded-xl border border-rule/70 bg-card">
              <img src={r.img} alt={r.task} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="flex items-center justify-between gap-4 border-t border-rule/70 px-5 py-4">
                <span className="text-sm font-medium">{r.task}</span>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{r.shots} demos</span>
                  <span className="font-serif text-base normal-case tracking-normal text-accent">{r.success}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TABLE: FOCA vs VLA models */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Comparison" title="FOCA vs wide range of VLA models when using full 100% data" />
        <div className="overflow-x-auto rounded-xl border border-rule/70 bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule/70 text-left text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <th className="px-5 py-3 font-medium">Method</th>
                <th className="px-5 py-3 font-medium">Avg</th>
                <th className="px-5 py-3 font-medium">10</th>
                <th className="px-5 py-3 font-medium">Goal</th>
                <th className="px-5 py-3 font-medium">Object</th>
                <th className="px-5 py-3 font-medium">Spatial</th>
              </tr>
            </thead>
            <tbody>
              {[
                { method: "Diff. Policy",  avg: "72.4", d10: "50.5", goal: "68.3", object: "92.5", spatial: "78.3" },
                { method: "Octo",          avg: "75.1", d10: "51.1", goal: "84.6", object: "85.7", spatial: "78.9" },
                { method: "Open-VLA",      avg: "76.5", d10: "53.7", goal: "79.2", object: "88.4", spatial: "84.7" },
                { method: "Spatial-VLA",   avg: "78.1", d10: "55.5", goal: "78.6", object: "89.9", spatial: "88.2" },
                { method: "CoT-VLA",       avg: "69.0", d10: "87.6", goal: "91.6", object: "87.5", spatial: "81.1" },
                { method: "DreamVLA",      avg: "92.6", d10: "89.5", goal: "89.5", object: "94.0", spatial: "97.5" },
                { method: "Groot-N1.0",    avg: "93.9", d10: "90.6", goal: "93.0", object: "97.6", spatial: "94.4" },
                { method: "Groot-N1.5",    avg: "94.6", d10: "92.8", goal: "92.8", object: "98.4", spatial: "94.4" },
                { method: "EO-1",          avg: "94.1", d10: "91.4", goal: "98.6", object: "96.6", spatial: "89.8" },
                { method: "Think-Act",     avg: "84.4", d10: "70.9", goal: "87.1", object: "91.4", spatial: "88.3" },
                { method: "SmolVLA",       avg: "92.5", d10: "82.0", goal: "96.0", object: "99.0", spatial: "93.0" },
                { method: "π₀ Fast",       avg: "85.5", d10: "60.2", goal: "88.6", object: "96.8", spatial: "96.4" },
                { method: "π₀",            avg: "94.6", d10: "90.0", goal: "95.4", object: "98.2", spatial: "94.6" },
              ].map((row) => (
                <tr key={row.method} className="border-b border-rule/40">
                  <td className="px-5 py-4 font-medium">{row.method}</td>
                  <td className="px-5 py-4 font-serif text-lg">{row.avg}</td>
                  <td className="px-5 py-4 font-serif text-lg">{row.d10}</td>
                  <td className="px-5 py-4 font-serif text-lg">{row.goal}</td>
                  <td className="px-5 py-4 font-serif text-lg">{row.object}</td>
                  <td className="px-5 py-4 font-serif text-lg">{row.spatial}</td>
                </tr>
              ))}
              <tr className="bg-accent/10 last:border-0">
                <td className="px-5 py-4 font-medium text-accent font-bold">▸ FOCA (Ours)</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">96.6</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">92.4</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">97.4</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">99.8</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">97.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TABLE */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Comparison" title="Comparison with general and task-specific PEFT methods for VLA adaptation in LIBERO" />
        <div className="overflow-x-auto rounded-xl border border-rule/70 bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule/70 text-left text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <th className="px-5 py-3 font-medium">Method</th>
                <th className="px-5 py-3 font-medium">100%</th>
                <th className="px-5 py-3 font-medium">40%</th>
                <th className="px-5 py-3 font-medium">10%</th>
              </tr>
            </thead>
            <tbody>
              {baselineRows.map((row) => (
                <tr key={row.method} className={`border-b border-rule/40 last:border-0 ${row.best ? "bg-accent/10" : ""}`}>
                  <td className={`px-5 py-4 font-medium ${row.best ? "text-accent font-bold" : ""}`}>
                    {row.best ? <span className="text-accent">▸ </span> : null}
                    {row.method}
                  </td>
                  <td className={`px-5 py-4 font-serif text-lg ${row.best ? "text-accent font-bold" : ""}`}>{row.d100}</td>
                  <td className={`px-5 py-4 font-serif text-lg ${row.best ? "text-accent font-bold" : ""}`}>{row.d40}</td>
                  <td className={`px-5 py-4 font-serif text-lg ${row.best ? "text-accent font-bold" : ""}`}>{row.d10}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TABLE 2 */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Comparison" title="Performance comparison between FOCA variants and pseudo-actions learned via IGM from DreamGen-generated synthetic videos" />
        <div className="overflow-x-auto rounded-xl border border-rule/70 bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule/70 text-left text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <th className="px-5 py-3 font-medium">Data scale</th>
                <th className="px-5 py-3 font-medium">π0 baseline</th>
                <th className="px-5 py-3 font-medium">IGM</th>
                <th className="px-5 py-3 font-medium">FOCA Implicit</th>
                <th className="px-5 py-3 font-medium">FOCA + DreamGen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule/40">
                <td className="px-5 py-4 font-medium">40% data</td>
                <td className="px-5 py-4 font-serif text-lg">89.9</td>
                <td className="px-5 py-4 font-serif text-lg">90.2</td>
                <td className="px-5 py-4 font-serif text-lg">93.0</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">95.7</td>
              </tr>
              <tr className="last:border-0">
                <td className="px-5 py-4 font-medium">10% data</td>
                <td className="px-5 py-4 font-serif text-lg">77.6</td>
                <td className="px-5 py-4 font-serif text-lg">76.8</td>
                <td className="px-5 py-4 font-serif text-lg">83.6</td>
                <td className="px-5 py-4 font-serif text-lg text-accent font-bold">86.4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BIBTEX */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeader kicker="Citation" title="BibTeX" />
        <pre className="overflow-x-auto rounded-xl border border-rule/70 bg-ink p-6 text-xs leading-relaxed text-paper">
{`@article{anon2026fewshot,
  title   = {Few-Shot Adaptation of Vision-Language-Action Models
             for Generalist Robot Manipulation},
  author  = {Anonymous Authors},
  journal = {Preprint},
  year    = {2026},
}`}
        </pre>
      </section>

      <footer className="border-t border-rule/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 — Project site template</span>
          <span>Built for academic use</span>
        </div>
      </footer>
    </main>
  );
}
