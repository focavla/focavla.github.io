# FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation

Official project website for the ICML 2026 paper.

## Overview

This website showcases the research paper "FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation" submitted to ICML 2026.

FOCA addresses the data efficiency challenge in Vision-Language-Action (VLA) models by introducing future-oriented conditioning mechanisms that enable long-horizon reasoning with limited demonstrations.

## Key Results

- **95.7% success rate** on LIBERO with only 20 demonstrations (outperforming Pi-Zero trained with 100 demonstrations at 94.6%)
- **7-12% improvement** in success rates across RoboCasa tasks on both π₀ and GR00T N1.5 architectures
- Validated on **9 simulated benchmarks**, simulated humanoid, and **3 real-robot setups** with Aloha bimanual robot arm

## Website Structure

```
focavla.github.io/
├── index.html          # Main website page
├── style.css           # Styling
├── assets/             # Figures and images from the paper
└── README.md           # This file
```

## Assets

The `assets/` directory contains all figures and visualizations from the research paper, including:

- FOCA method overview diagrams
- LIBERO benchmark results
- RoboCasa task performance
- Aloha real robot demonstrations
- Object-centric region visualizations
- Qualitative comparisons

## Usage

To view the website locally:

1. Clone this repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{foca2026,
    title={FOCA: Future-Oriented Conditioning for Data-Efficient Vision-Language-Action Adaptation},
    author={Nguyen, Duc Minh and Diep, Nghiem Tuong and Nguyen, Binh Gia and Ho, Trong-Bao and Le, Doanh and Nguyen, Tan Q. and Ha, Thien-Loc and Tran, Nhiem and Thach, Bao and Tran, Nhat X. and Tran, Tuan A. and Habuda, Artur and Møller, Philip Lund and Le, Tran Nguyen and Sonntag, Daniel and Niepert, Mathias and Doan, Khoa D. and Duong, Vu and Ngo, Hung Quoc and Vu, Minh N. and Nguyen, Duy M. H. and Le, An Thai and Vien, Ngo Anh},
    booktitle={International Conference on Machine Learning (ICML)},
    year={2026}
}
```

## Contact

For questions or collaborations, please contact the corresponding author: Ngo Anh Vien (v.vienna@vinrobotics.net)

## Acknowledgments

This work is supported by:
- Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) under Germany's Excellence Strategy - EXC 2075 – 390740016
- International Max Planck Research School for Intelligent Systems (IMPRS-IS)
- No-IDLE project (BMBF, 01IW23002)
- MASTER project (EU, 101093079)
- Endowed Chair of Applied Artificial Intelligence, Oldenburg University
