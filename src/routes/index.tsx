import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Github, Database, Play } from "lucide-react";
const TITLE = "FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation";

const SHORT = "Parameter-efficient adaptation of Vision-Language-Action models using future-oriented conditioning.";

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
  { img: "/assets/bag_success.mp4", task: "Use both hands to align the bag, grasp the zipper with the right hand, and pull it smoothly until the green bag is fully opened.", success: "8 / 10", shots: 5, baseVideo: "/assets/aloha_gif/bag_failed.mp4", focaVideo: "/assets/aloha_gif/bag_success.mp4" },
  { img: "/assets/shoe_failed.mp4", task: "Use both grippers to grasp the shoelaces, cross and tighten them, form a loop with one lace, wrap the other lace around the loop, and pull both ends to tie a secure knot.", success: "8 / 10", shots: 5, baseVideo: "/assets/aloha_gif/shoes_success.mp4", focaVideo: "/assets/aloha_gif/shoes_success.mp4" },
  { img: "/assets/table_failed.mp4", task: "Place the plate at the center of the mat, then pick up the bowl and place it inside the plate, and finally pick up and place the chopsticks to the right of the plate.", success: "9 / 10", shots: 5, baseVideo: "/assets/aloha_gif/table_failed.mp4", focaVideo: "/assets/aloha_gif/table_success.mp4"},
];
const simTasks = [
  { img: "/assets/libero_bowl.png", task: "Open the top drawer and place the bowl inside", success: "94%", shots: 10 },
  { img: "/assets/libero_soup.png", task: "Sort cubes by color into matching bins", success: "88%", shots: 10 },
];

const baselineRows = [
  { method: "Zero-shot VLA",       real: "12%", sim: "21%", params: "—" },
  { method: "Full fine-tuning",    real: "71%", sim: "82%", params: "7.0 B" },
  { method: "LoRA fine-tuning",    real: "63%", sim: "76%", params: "18 M" },
  { method: "Ours (few-shot)",     real: "84%", sim: "91%", params: "4.2 M", best: true },
];

function Index() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-rule/60 bg-card/60 px-3 py-1">
              <img
                src="/assets/icml_logo.svg"
                alt="ICML"
                className="h-15 w-auto"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                ICML 2026
              </span>
            </span>

            <Pill>Robot Learning</Pill>
            <Pill>Vision-Language-Action</Pill>
          </div>

          <h1 className="mt-8 font-serif text-4xl leading-[1.04] tracking-tight md:text-6xl">
            FOCA: Future-Oriented Conditioning for Data-Efficient <span className="text-accent">Vision-Language-Action</span> Adaptation
            <span className="block text-muted-foreground text-3xl md:text-4xl mt-3 font-normal italic">
              learning new manipulation skills from a handful of demonstrations
            </span>
          </h1>

          {/* authors */}
          <div className="mt-8 max-w-5xl text-base text-foreground/90">
            <p className="leading-relaxed">
              Duc Minh Nguyen<sup>*1,2</sup>,{" "}
              Nghiem Tuong Diep<sup>*1,2</sup>,{" "}
              Binh Gia Nguyen<sup>*1,2</sup>,{" "}
              Trong-Bao Ho<sup>1</sup>,{" "}
              Doanh Le<sup>2</sup>,{" "}
              Tan Q. Nguyen<sup>1</sup>,{" "}
              Thien-Loc Ha<sup>1</sup>,{" "}
              Nhiem Tran<sup>1</sup>,{" "}
              Bao Thach<sup>1,3</sup>,{" "}
              Nhat X. Tran<sup>1</sup>,{" "}
              Tuan A. Tran<sup>4</sup>,{" "}
              Artur Habuda<sup>5</sup>,{" "}
              Philip Lund Møller<sup>5</sup>,{" "}
              Tran Nguyen Le<sup>5</sup>,{" "}
              Daniel Sonntag<sup>4,6</sup>,{" "}
              Mathias Niepert<sup>7,8</sup>,{" "}
              Khoa D. Doan<sup>2</sup>,{" "}
              Vu Duong<sup>2</sup>,{" "}
              Hung Quoc Ngo<sup>1</sup>,{" "}
              Minh N. Vu<sup>1,2</sup>,{" "}
              Duy M. H. Nguyen<sup>†4,7,8</sup>,{" "}
              An Thai Le<sup>†1,2</sup>,{" "}
              Ngo Anh Vien<sup>†1,2</sup>
            </p>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              * Equal contribution &nbsp; · &nbsp;
              † Senior Authors
            </p>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <sup>1</sup> VinRobotics, Vietnam &nbsp;·&nbsp;
              <sup>2</sup> Center for AI Research, VinUniversity, Vietnam &nbsp;·&nbsp;
              <sup>3</sup> University of Utah, USA
              <br />
              <sup>4</sup> German Research Center for Artificial Intelligence (DFKI)
              &nbsp;·&nbsp;
              <sup>5</sup> Technical University of Denmark
              <br />
              <sup>6</sup> University of Oldenburg &nbsp;·&nbsp;
              <sup>7</sup> University of Stuttgart &nbsp;·&nbsp;
              <sup>8</sup> Max Planck Research School for Intelligent Systems (IMPRS-IS)
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
              Figure 1 — Overview of FOCA. Our framework injects future-oriented conditioning into VLA adaptation through explicit future interaction prediction and implicit alignment to future goals, enabling data-efficient learning and action-free co-training with video world models.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ABSTRACT */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Abstract" title="Data-efficient adaptation through future-oriented reasoning." />
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-4 text-sm">
            <div>
              <div className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                LIBERO
              </div>
              <div className="font-serif text-3xl">95.7%</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Beats π0 (100% data) by only <div className="font-serif text-[1.2rem] text-accent">40% data</div> 
              </div>
            </div>

            <div>
              <div className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                ROBOCASA GAIN
              </div>
              <div className="font-serif text-3xl">+7–12%</div>
              <div className="mt-1 text-xs text-muted-foreground">
                over prior adaptation methods
              </div>
            </div>

            <div>
              <div className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                REAL ROBOTS
              </div>
              <div className="font-serif text-3xl">+26%</div>
              <div className="mt-1 text-xs text-muted-foreground">
                absolute improvement
              </div>
            </div>
          </aside>

          <div className="font-serif text-lg leading-[1.7] text-foreground/90">
            <p>
              Can robots learn new skills from only a handful of demonstrations?
            </p>

            <p>
              Despite impressive progress, today's Vision-Language-Action (VLA) models struggle in this setting.
              We show that performance drops sharply as training data becomes scarce, exposing a critical weakness
              of current <strong>few-shot adaptation</strong> methods.
            </p>

            <p className="mt-4">
              FOCA addresses this challenge by teaching robots to reason about <strong>future interactions</strong> rather
              than simply imitate actions. By combining future-oriented prediction with alignment to future goals,
              FOCA enables efficient adaptation, supports long-horizon decision making, and naturally enables
              <strong> action-free co-training with video world models</strong> through synthetic video supervision.
              The result is a simple and scalable framework that achieves
              <strong> state-of-the-art performance</strong> across simulation and real-world robot
              manipulation tasks.
            </p>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Method" title="Explicit prediction. Implicit alignment. Better adaptation." />
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
            Figure 2 — Video overview of FOCA. We predict task-grounded future interactions and align them with future goals to enable data-efficient adaptation and action-free learning.
          </figcaption>
        </figure>
          <div className="mt-12 space-y-6">
            {[
              // {
              //   n: "01",
              //   t: "Explicit Future Prediction",
              //   b: "FOCA predicts task-grounded future interaction embeddings in latent space using representative tokens and a lightweight decoder. By focusing on robot-object interactions rather than the entire scene, it captures anticipated outcomes while remaining robust to task-irrelevant content."
              // },
              {
                n: "01",
                t: "Explicit Future Prediction",
                b: (
                  <>
                    <p>
                      FOCA predicts task-grounded future interaction embeddings in latent
                      space using representative tokens and a lightweight decoder. By
                      focusing on robot-object interactions rather than the entire scene,
                      it captures anticipated outcomes while remaining robust to
                      task-irrelevant content.
                    </p>

                    <img
                      src="/assets/explicit_overview.png"
                      alt="Explicit Future Prediction"
                      className="mx-auto mt-6 max-w-3xl rounded-lg border border-rule/60"
                    />
                  </>
                ),
              },
              {
                n: "02",
                t: "Implicit Future Alignment",
                b: (
                  <>
                    <p>
                      FOCA aligns interaction tokens with future goal observations through
                      an implicit future-conditioning objective. This enables long-horizon
                      reasoning and can be interpreted as learning value-like
                      representations of future task completion.
                    </p>

                    <img
                      src="/assets/implicit_overview.png"
                      alt="Implicit Future Alignment"
                      className="mx-auto mt-6 max-w-4xl rounded-lg border border-rule/60"
                    />
                  </>
                ),
              },
              {
                n: "03",
                t: "Action-Free Supervision",
                b: (
                  <>
                    <p>
                      FOCA naturally supports action-free co-training with synthetic videos
                      generated by video world models. Unlike methods that require
                      pseudo-actions or inverse dynamics, FOCA can learn directly from
                      future visual trajectories.
                    </p>

                    <img
                      src="/assets/action_free.png"
                      alt="Action-Free Supervision"
                      className="mx-auto mt-6 max-w-4xl rounded-lg border border-rule/60"
                    />
                  </>
                ),
              },
            ].map((s) => (
              <article
                key={s.n}
                className="rounded-xl border border-rule/60 bg-card/60 p-8"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-accent">
                  Contribution {s.n}
                </div>

                <h3 className="mt-3 font-serif text-3xl">
                  {s.t}
                </h3>

                {/* <p className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground">
                  {s.b}
                </p> */}
                <div className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground">
                  {s.b}
                </div>
              </article>
            ))}
          </div>
      </section>

      {/* REAL-WORLD */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Results · Real World" title="Three tasks on a ALOHA Robot" />
        <div className="grid gap-6">
          {realTasks.map((r) => (
              <figure
                key={r.task}
                className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-rule/70 bg-card"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <span className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-3 py-1.5 text-sm font-semibold text-white">
                      Base VLA
                    </span>

                    <video
                      className="w-full object-contain"
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
                      className="w-full object-contain"
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

      {/* TABLE */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeader kicker="Comparison" title="Average success rate across all evaluated tasks." />
        <div className="overflow-x-auto rounded-xl border border-rule/70 bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule/70 text-left text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <th className="px-5 py-3 font-medium">Method</th>
                <th className="px-5 py-3 font-medium">Real world</th>
                <th className="px-5 py-3 font-medium">Simulation</th>
                <th className="px-5 py-3 font-medium text-right">Trainable params</th>
              </tr>
            </thead>
            <tbody>
              {baselineRows.map((row) => (
                <tr key={row.method} className={`border-b border-rule/40 last:border-0 ${row.best ? "bg-accent/5" : ""}`}>
                  <td className="px-5 py-4 font-medium">
                    {row.best ? <span className="text-accent">▸ </span> : null}
                    {row.method}
                  </td>
                  <td className="px-5 py-4 font-serif text-lg">{row.real}</td>
                  <td className="px-5 py-4 font-serif text-lg">{row.sim}</td>
                  <td className="px-5 py-4 text-right font-mono text-xs text-muted-foreground">{row.params}</td>
                </tr>
              ))}
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
