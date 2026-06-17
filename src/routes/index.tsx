import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Github, Database, Play } from "lucide-react";
const TITLE = "FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation";
const SHORT = "Parameter-efficient adaptation of Vision-Language-Action models using future-oriented conditioning.";

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "method", label: "Method" },
  { id: "real-world", label: "Real World" },
  { id: "simulation", label: "Simulation" },
  { id: "comparison", label: "Results" },
  { id: "citation", label: "Citation" },
];

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


const realTaskRows = [
  {
    left: {
      task:
        "Align the bag and fully open the zipper.",
      success: "25% -> 45%",
      shots: 150,
      baseVideo: "/assets/realrobot_videos/bag_fail.mp4",
      focaVideo: "/assets/realrobot_videos/bag_succ.mp4",
    },

    right: {
      task:
        "Dispense a napkin from a container",
      success: "20% -> 45%",
      shots: 100,
      baseVideo: "/assets/realrobot_videos/dispense_napkin_fail.mp4", 
      focaVideo: "/assets/realrobot_videos/dispense_napkin_succ.mp4",
    },
  },

  {
    left: {
      task:
        "Center the plate on the mat, place the bowl inside it, and set the chopsticks on the right.",
      success: "10% -> 45%",
      shots: 150,
      baseVideo: "/assets/realrobot_videos/table_fail.mp4",
      focaVideo: "/assets/realrobot_videos/table_succ.mp4",
    },

    right: {
      task:
        "Tie the shoelaces into a secure knot.",
      success: "70% -> 95%",
      shots: 150,
      baseVideo: "/assets/realrobot_videos/shoes_fail.mp4",
      focaVideo: "/assets/realrobot_videos/shoes_succ.mp4",
    },
  },
  {
    left: {
      task:
        "Pick up a bowl containing bulk material and pour the material into a designated target container.",
      success: "40% -> 50%",
      shots: 100,
      baseVideo: "/assets/realrobot_videos/bulk_fail.mp4",
      focaVideo: "/assets/realrobot_videos/bulk_succ.mp4",
    },

    right: {
      task:
        "Move the prompted-color test tube to the target.",
      success: "5% -> 30%",
      shots: 40,
      baseVideo: "/assets/realrobot_videos/tube_fail.mp4",
      focaVideo: "/assets/realrobot_videos/tube_succ.mp4",
    },
  },
];

const additionalRealTasks = [
  {
    task: "Place the object onto the jig by aligning with the pins.",
    shots: '98 demos',
    success: "58% -> 84%",
    video: "/assets/realrobot_videos/part_placing_vrh3.mp4",
  },
  {
    task: "Place the object onto the jig by aligning with the pins.",
    shots: '',
    success: "",
    video: "/assets/realrobot_videos/part-placing_gr00tn1.5_paint.MOV",
  },
];

const simTaskRows = [
  {
    left: {
      task: "Open the top drawer and place the bowl inside.",
      success: "94%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/rollout_open_the_top_drawer_and_put_the_bowl_inside_failure.mp4",
      focaVideo:
        "/assets/sim_videos/rollout_open_the_top_drawer_and_put_the_bowl_inside_success.mp4",
    },

    right: {
      task: "Pick up the alphabet soup and place it in the basket.",
      success: "96%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/rollout_pick_up_the_alphabet_soup_and_place_it_in_the_basket_failure.mp4",
      focaVideo:
        "/assets/sim_videos/rollout_pick_up_the_alphabet_soup_and_place_it_in_the_basket_success.mp4",
    },
  },

  {
    left: {
      task: "Pick up the BBQ sauce and place it in the basket.",
      success: "92%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/rollout_pick_up_the_bbq_sauce_and_place_it_in_the_basket_failure.mp4",
      focaVideo:
        "/assets/sim_videos/rollout_pick_up_the_bbq_sauce_and_place_it_in_the_basket_success.mp4",
    },

    right: {
      task:
        "Pick up the black bowl between the plate and the ramekin and place it on the plate.",
      success: "95%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/rollout_pick_up_the_black_bowl_between_the_plate_and_the_ramekin_and_place_it_on_the_plate_failure.mp4",
      focaVideo:
        "/assets/sim_videos/rollout_pick_up_the_black_bowl_between_the_plate_and_the_ramekin_and_place_it_on_the_plate_success.mp4",
    },
  },

  {
    left: {
      task:
        "Pick up the black bowl from the table center and place it on the plate.",
      success: "97%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/rollout_pick_up_the_black_bowl_from_table_center_and_place_it_on_the_plate_failure.mp4",
      focaVideo:
        "/assets/sim_videos/rollout_pick_up_the_black_bowl_from_table_center_and_place_it_on_the_plate_success.mp4",
    },

    right: {
      task: "Turn off the front center burner of the stove.",
      success: "91%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/turn off the front center burner of the stove_failure.mp4",
      focaVideo:
        "/assets/sim_videos/turn off the front center burner of the stove_success.mp4",
    },
  },

  {
    left: {
      task: "Pick the mango from the cabinet and place it on the counter.",
      success: "93%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/pick the mango from the cabinet and place it on the counter_failure.mp4",
      focaVideo:
        "/assets/sim_videos/pick the mango from the cabinet and place it on the counter_success.mp4",
    },

    right: {
      task:
        "Pick the mug from the counter and place it under the coffee machine dispenser.",
      success: "90%",
      shots: 10,
      baseVideo:
        "/assets/sim_videos/pick the mug from the counter and place it under the coffee machine dispenser_failure.mp4",
      focaVideo:
        "/assets/sim_videos/pick the mug from the counter and place it under the coffee machine dispenser_success.mp4",
    },
  },
];

const baselineRows = [
  { method: "Control-VLA (Li et al., CoRL 2025)",  d100: "95.6", d40: "91.3", d10: "78.4" },
  { method: "LoRA (r=64) (Hu et al., ICLR 2022)",  d100: "94.2", d40: "90.2", d10: "78.2" },
  { method: "DoRA (r=64) (Liu et al., ICML 2024)",  d100: "94.7", d40: "92.0", d10: "78.6" },
  { method: "FOCA (ours)",         d100: "96.6", d40: "94.0", d10: "85.3", best: true },
];

function Index() {
  const [activeSection, setActiveSection] = useState("abstract");
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen">
      <div className="fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 xl:block group">
        <nav
          className="
            ml-2
            -translate-x-[85%]
            transition-transform
            duration-300
            ease-out
            group-hover:translate-x-0
          "
        >
          <div className="relative rounded-xl border border-rule/70 bg-card/90 p-4 backdrop-blur-md shadow-lg">
            <ul className="space-y-4">
              {sections.map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`flex items-center gap-3 text-sm transition-colors ${
                      activeSection === section.id
                        ? "text-accent font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        activeSection === section.id
                          ? "bg-accent"
                          : "bg-muted-foreground/30"
                      }`}
                    />

                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-14 pb-10 md:pt-20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-rule/60 bg-card/60 px-3 py-1">
              <img
                src="/assets/logo/icml_logo.svg"
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
            <div className="mt-8 space-y-8">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center justify-center gap-10">
                {[
                  { src: "/assets/logo/vinrobotics_logo_v2.svg", alt: "VinRobotics", className: "h-11 w-auto object-contain" },
                  { src: "/assets/logo/vinuniversity_logo.jpg", alt: "VinUniversity", className: "max-h-11 max-w-full object-contain" },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className="inline-flex items-center justify-center rounded-xl border border-rule/50 bg-white px-3 py-2"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={logo.className ?? "max-h-16 w-auto object-contain"}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center justify-center gap-10">
                {[
                  { src: "/assets/logo/DTU.png", alt: "TU Denmark", className: "max-h-20 max-w-full object-contain", },
                  {src: "/assets/logo/university-of-stuttgart-logo.png", alt: "University of Stuttgart", className: "max-h-24 max-w-full object-contain",},
                  { src: "/assets/logo/mpi_logo_v2.png", alt: "IMPRS-IS", className: "max-h-20 max-w-full object-contain", },
                  { src: "/assets/logo/dfki_logo.png", alt: "DFKI", className: "max-h-20 max-w-full object-contain", },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className="inline-flex items-center justify-center rounded-xl border border-rule/50 bg-white px-3 py-2"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={logo.className ?? "max-h-16 w-auto object-contain"}
                    />
                  </div>
                ))}
              </div>
            </div>
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
        <div className="mx-auto max-w-5xl px-6 pb-16">
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
      <section className="mx-auto max-w-5xl px-6 pb-16" id="abstract">
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
      <section className="mx-auto max-w-5xl px-6 pb-16" id="method">
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
                  Key Idea {s.n}
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
      <section className="mx-auto max-w-5xl px-6 pb-16" id="real-world">
        <SectionHeader
          kicker="Results · Real World"
          title="Nine tasks on an ALOHA, VRH-3 and UR5 Robot"
        />
        {/* Coca-Cola task */}
        <figure className="mb-6 overflow-hidden rounded-xl">
          <video
            className="mx-auto w-[80%]"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source
              src="/assets/realrobot_videos/cocacola.mp4"
              type="video/mp4"
            />
          </video>
        </figure>

        <div className="grid gap-6">
          {realTaskRows.map((row, idx) => (
            <div
              key={idx}
              className="grid gap-6 lg:grid-cols-2"
            >
              {[row.left, row.right].map((r) => (
                <figure
                  key={r.task}
                  className="overflow-hidden rounded-xl border border-rule/70 bg-card"
                >
                  <div className="grid grid-cols-2">
                    {/* Base VLA */}
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500/60 px-4 py-1 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        Failed
                      </span>
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

                    {/* FOCA */}
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-500/60 px-4 py-1 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        Success
                      </span>

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
                    <span className="flex-1 text-sm font-medium leading-relaxed">
                      {r.task}
                    </span>

                    <span className="px-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {r.shots} demos
                    </span>

                    <span className="font-serif text-base text-accent">
                      {r.success}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>


        {/* Success-only tasks */}
        <div className="grid gap-6 lg:grid-cols-2">
          {additionalRealTasks.map((task) => (
            <figure
              key={task.task}
              className="overflow-hidden rounded-xl border border-rule/70 bg-card"
            >
              <div className="relative h-[280px] overflow-hidden">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-500/60 px-4 py-1 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                  Success
                </span>

                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={task.video} type="video/mp4" />
                </video>
              </div>

              <figcaption className="flex items-center justify-between gap-4 border-t border-rule/70 px-5 py-4">
                {/* <span className="max-w-[50%] text-sm font-medium leading-relaxed">
                  {task.task}
                </span>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{task.shots} demos</span>

                  <span className="font-serif text-base normal-case tracking-normal text-accent">
                    {task.success}
                  </span>
                </div> */}
                <span className="flex-1 text-sm font-medium leading-relaxed">
                  {task.task}
                </span>

                <span className="px-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {task.shots}
                </span>

                <span className="font-serif text-base text-accent">
                  {task.success}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SIMULATION */}
      <section className="mx-auto max-w-5xl px-6 pb-16" id="simulation">
        <SectionHeader kicker="Results · Simulation" title="Several LIBERO and ROBOCASA tasks." />

        <div className="grid gap-6">
          {simTaskRows.map((row, idx) => (
            <div
              key={idx}
              className="grid gap-6 lg:grid-cols-2"
            >
              {[row.left, row.right].map((r) => (
                <figure
                  key={r.task}
                  className="overflow-hidden rounded-xl border border-rule/70 bg-card"
                >
                  <div className="grid grid-cols-2">
                    {/* Base VLA */}
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500/60 px-4 py-1 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        Failed
                      </span>
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

                    {/* FOCA */}
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-500/60 px-4 py-1 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        Success
                      </span>

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
                    <span className="text-sm font-medium">
                      {r.task}
                    </span>

                    {/* <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{r.shots} demos</span>

                      <span className="font-serif text-base normal-case tracking-normal text-accent">
                        {r.success}
                      </span>
                    </div> */}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>


      {/* TABLE: FOCA vs VLA models */}
      <section className="mx-auto max-w-5xl px-6 pb-16" id="comparison">
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
                { method: "Diff. Policy (Chi et al., RSS 2023)",  avg: "72.4", d10: "50.5", goal: "68.3", object: "92.5", spatial: "78.3" },
                { method: "Octo (Ghosh et al., Arxiv 2024)",          avg: "75.1", d10: "51.1", goal: "84.6", object: "85.7", spatial: "78.9" },
                { method: "Open-VLA (Kim et al., CoRL 2024)",      avg: "76.5", d10: "53.7", goal: "79.2", object: "88.4", spatial: "84.7" },
                { method: "Spatial-VLA (Qu et al., RSS 2025)",   avg: "78.1", d10: "55.5", goal: "78.6", object: "89.9", spatial: "88.2" },
                { method: "CoT-VLA (Zhao et al., CVPR 2025)",       avg: "69.0", d10: "87.6", goal: "91.6", object: "87.5", spatial: "81.1" },
                { method: "DreamVLA (Zhang et al., NeurIPS 2025)",      avg: "92.6", d10: "89.5", goal: "89.5", object: "94.0", spatial: "97.5" },
                { method: "Groot-N1.0 (Bjorck et al., NVIDIA 2025)",    avg: "93.9", d10: "90.6", goal: "93.0", object: "97.6", spatial: "94.4" },
                { method: "Groot-N1.5 (Bjorck et al., NVIDIA 2025)",    avg: "94.6", d10: "92.8", goal: "92.8", object: "98.4", spatial: "94.4" },
                { method: "EO-1 (Qu et al., Arxiv 2026)",          avg: "94.1", d10: "91.4", goal: "98.6", object: "96.6", spatial: "89.8" },
                { method: "Think-Act (Huang et al., NVIDIA 2025)",     avg: "84.4", d10: "70.9", goal: "87.1", object: "91.4", spatial: "88.3" },
                { method: "SmolVLA (Shukor et al., Hugging Face 2025)",       avg: "92.5", d10: "82.0", goal: "96.0", object: "99.0", spatial: "93.0" },
                { method: "π₀ Fast (Pertsch et al., Physical Intelligence 2025)",       avg: "85.5", d10: "60.2", goal: "88.6", object: "96.8", spatial: "96.4" },
                { method: "π₀ (Black et al., Physical Intelligence 2025)",            avg: "94.6", d10: "90.0", goal: "95.4", object: "98.2", spatial: "94.6" },
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

        {/* TABLE: FEW-SHOT COMPARISON */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <SectionHeader
            kicker="Few-shot Adaptation"
            title="Performance under limited demonstration budgets"
          />
          <div className="overflow-x-auto rounded-xl border border-rule/70 bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-rule/70 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <th className="px-5 py-3 text-left font-medium">
                    Method
                  </th>

                  <th
                    colSpan={4}
                    className="px-5 py-3 text-center font-medium border-r border-rule/70"
                  >
                    40% Data
                  </th>

                  <th
                    colSpan={4}
                    className="px-5 py-3 text-center font-medium"
                  >
                    10% Data
                  </th>
                </tr>

                <tr className="border-b border-rule/70">
                  <th className="px-5 py-3" />

                  <th className="px-5 py-3 text-center font-medium">
                    Avg
                  </th>

                  <th className="px-5 py-3 text-center font-medium">
                    10
                  </th>

                  <th className="px-5 py-3 text-center font-medium">
                    Object
                  </th>

                  <th className="px-5 py-3 text-center font-medium border-r border-rule/70">
                    Spatial
                  </th>

                  <th className="px-5 py-3 text-center font-medium">
                    Avg
                  </th>

                  <th className="px-5 py-3 text-center font-medium">
                    10
                  </th>

                  <th className="px-5 py-3 text-center font-medium">
                    Object
                  </th>

                  <th className="px-5 py-3 text-center font-medium">
                    Spatial
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    method: "π₀ (Black et al., Physical Intelligence 2025)",
                    d40: ["89.9", "82.0", "95.2", "89.6"],
                    d10: ["77.6", "59.0", "80.6", "83.4"],
                  },
                  {
                    method: "Groot-N1.5 (Bjorck et al., NVIDIA 2025)",
                    d40: ["91.4", "84.5", "98.9", "90.6"],
                    d10: ["78.2", "62.6", "85.7", "85.7"],
                  },
                  {
                    method: "EO-1 (Qu et al., Arxiv 2026)",
                    d40: ["91.0", "88.4", "96.0", "86.8"],
                    d10: ["82.2", "65.0", "89.6", "83.0"],
                  },
                  {
                    method: "SmolVLA (Shukor et al., Hugging Face 2025)",
                    d40: ["90.3", "80.0", "96.0", "90.0"],
                    d10: ["77.3", "51.3", "86.0", "81.0"],
                  },
                ].map((row) => (
                  <tr
                    key={row.method}
                    className="border-b border-rule/40"
                  >
                    <td className="px-5 py-4 font-medium">
                      {row.method}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d40[0]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d40[1]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d40[2]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center border-r border-rule/40">
                      {row.d40[3]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d10[0]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d10[1]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d10[2]}
                    </td>

                    <td className="px-5 py-4 font-serif text-lg text-center">
                      {row.d10[3]}
                    </td>
                  </tr>
                ))}

                <tr className="bg-accent/15">
                  <td className="px-5 py-4 font-bold text-accent">
                    ▸ FOCA (Ours)
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    94.0
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    88.0
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    99.6
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent border-r border-accent/30">
                    93.6
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    85.3
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    69.4
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    90.4
                  </td>

                  <td className="px-5 py-4 text-center font-serif text-lg font-bold text-accent">
                    89.4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      {/* TABLE */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
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
      <section className="mx-auto max-w-5xl px-6 pb-16">
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
      <section className="mx-auto max-w-5xl px-6 pb-24" id="citation">
        <SectionHeader kicker="Citation" title="BibTeX" />
        <pre className="overflow-x-auto rounded-xl border border-rule/70 bg-ink p-6 text-xs leading-relaxed text-paper">
{`@inproceedings{foca2026,
    title={FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation},
    author={Nguyen, Duc Minh and Diep, Nghiem Tuong and Nguyen, Binh Gia and Ho, Trong-Bao and Le, Doanh and Nguyen, Tan Q. and Ha, Thien-Loc and Tran, Nhiem and Thach, Bao and Tran, Nhat X. and Tran, Tuan A. and Habuda, Artur and Møller, Philip Lund and Le, Tran Nguyen and Sonntag, Daniel and Niepert, Mathias and Doan, Khoa D. and Duong, Vu and Ngo, Hung Quoc and Vu, Minh N. and Nguyen, Duy M. H. and Le, An Thai and Vien, Ngo Anh},
    booktitle={International Conference on Machine Learning (ICML)},
    year={2026}
}`}
        </pre>
      </section>

      <footer className="border-t border-rule/70">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 — Project site template</span>
          <span>Built for academic use</span>
        </div>
      </footer>
    </main>
  );
}
