export const researchData = {
  title: "Explainable Graph-based Learning Framework for Drug–Drug Interaction Prediction",
  publicationType: "IEEE Conference Publication",
  publicationVenue: "IEEE Xplore",
  ieeeUrl: "https://ieeexplore.ieee.org/document/11581200",
  kaggleUrl: "https://www.kaggle.com/code/yogantpatil/drug-drug-interaction-thesis-research",
  areas: [
    "Drug–Drug Interaction Prediction",
    "Machine Learning",
    "Graph-based Learning",
    "Explainable AI",
    "Healthcare AI",
  ],
  summary:
    "An explainable computational framework that integrates molecular structure and biological information to identify potential adverse drug–drug interactions using Graph Attention Networks (GAT) and SHAP-based feature importance analysis, achieving 98.24% accuracy in cold-start scenarios on DrugBank benchmark data.",
  metrics: [
    { label: "Cold-Start Accuracy", value: "98.24%" },
    { label: "Warm-Start AUROC", value: "99.86%" },
    { label: "Cold-Start AUPR", value: "97.22%" },
    { label: "Dataset Benchmark", value: "DrugBank" },
  ],
  sections: {
    problem: {
      title: "1. Research Problem & Background",
      content:
        "Co-administering multiple medications (polypharmacy) is increasingly common in healthcare but introduces significant risks of adverse Drug–Drug Interactions (DDIs). Traditional in-vitro and clinical trials are expensive, time-consuming, and cannot scale to evaluate all possible drug combinations. Computational prediction using Graph Neural Networks provides an effective, scalable methodology to model complex relational structures between molecular graphs and biological systems.",
    },
    workflow: {
      title: "2. Methodology & Technical Workflow",
      steps: [
        {
          name: "Attributed Molecular Graph Modeling",
          desc: "Each drug molecule is represented as an attributed graph where atoms are nodes and chemical bonds are edges, initialized with physicochemical node feature vectors using RDKit.",
        },
        {
          name: "Graph Attention Network (GAT)",
          desc: "Employed Graph Attention Networks to learn structural representations that capture critical molecular motifs and substructures.",
        },
        {
          name: "Biological Feature Enhancement",
          desc: "Enriched molecular graph representations with biological information, including metabolizing enzymes, protein targets, transporter involvement, and interaction network topology.",
        },
        {
          name: "Symmetric Pair Fusion & Prediction",
          desc: "Fused drug-pair representations symmetrically to compute interaction probabilities invariant to input ordering.",
        },
        {
          name: "SHAP Explainability Layer",
          desc: "Applied SHAP (SHapley Additive exPlanations) to biological features to identify the primary biochemical drivers behind each predicted interaction.",
        },
      ],
    },
    motivation: {
      title: "3. Motivation",
      content:
        "Bridging the gap between high-performing deep learning models and clinical interpretability. Black-box predictions are inadequate in healthcare; doctors and researchers need to understand why an interaction is predicted to assess clinical significance and improve drug safety research.",
    },
    challenges: {
      title: "4. Challenges & Technical Hurdles",
      points: [
        "Cold-Start Generalization: Evaluating predictions on completely unseen drugs that were not part of the training graph.",
        "Relational Data Complexity: Integrating heterogeneous data sources spanning molecular structures, protein targets, and biological networks.",
        "Biological Interpretability: Designing an explanation pipeline that validates identified enzymes (e.g., CYP1A2, CYP3A4) against established pharmacological knowledge.",
      ],
    },
    contributions: {
      title: "5. My Personal Contributions",
      points: [
        "Formulated the research problem and preprocessed benchmark data from the DrugBank repository.",
        "Implemented graph construction, GAT neural network architectures in PyTorch Geometric, and symmetric feature fusion pipelines in Python.",
        "Executed experimental validation under both warm-start and stringent cold-start evaluation protocols.",
        "Integrated the SHAP explainability layer to rank influential biological factors.",
        "Authored the research paper published and indexed in IEEE Xplore.",
      ],
    },
    learnings: {
      title: "6. Key Learnings & Skills Gained",
      points: [
        "Applied graph-based machine learning to complex relational biomedical datasets.",
        "Engineered end-to-end ML pipelines from raw chemical representations to explainable predictions.",
        "Mastered rigorous evaluation methodology (AUROC, AUPR, cold-start protocols).",
        "Developed deep experience in Explainable AI (XAI) and scientific documentation.",
      ],
    },
  },
  tags: [
    "Python",
    "Machine Learning",
    "Graph Learning",
    "Explainable AI",
    "Data Science",
    "Healthcare AI",
  ],
};
