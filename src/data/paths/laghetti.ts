import { colors } from "../../styles"

const paths = [
  {
    legend: "Parcheggio - Inizio percorso",
    key: "park-laghetti-start",
    path: [
      [46.04685, 12.02487],
      [46.04637, 12.02511],
      [46.04627, 12.02529],
      [46.04627, 12.02547],
      [46.04636, 12.02612],
      [46.04603, 12.02633],
      [46.04559, 12.02653],
      [46.04515, 12.02685],
      [46.04518, 12.0271],
      [46.04521, 12.02727],
      [46.04529, 12.02762],
      [46.04533, 12.02764],
      [46.04545, 12.02786],
      [46.04558, 12.02794],
      [46.04567, 12.02795],
      [46.0457, 12.02783],
      [46.04571, 12.02769],
      [46.04571, 12.0276],
      [46.04572, 12.02747],
      [46.04576, 12.0274],
      [46.04599, 12.02733],
      [46.04625, 12.02724],
      [46.04644, 12.02711],
      [46.04678, 12.02703],
      [46.04697, 12.02695],
      [46.04716, 12.02694],
      [46.04752, 12.02676],
      [46.04779, 12.02666],
      [46.048, 12.02661],
      [46.04817, 12.02653],
      [46.04827, 12.02653],
      [46.04837, 12.02656],
      [46.04845, 12.02656],
      [46.04865, 12.02643],
      [46.04881, 12.02638],
      [46.04921, 12.02631],
      [46.04941, 12.02632],
      [46.04946, 12.02637],
      [46.04948, 12.02645],
      [46.04948, 12.02688],
      [46.04951, 12.02655],
      [46.04955, 12.02649],
    ] as [number, number][],
    color: colors.paths.tomato,
  },
  {
    legend: 'Percorso "Laghetti della Rimonta"',
    key: "laghetti-round-trip",
    path: [
      [46.04947, 12.02641],
      [46.04948, 12.02645],
      [46.04948, 12.02688],
      [46.04951, 12.02655],
      [46.0496, 12.02642],
      [46.04973, 12.02623],
      [46.04985, 12.02626],
      [46.04995, 12.02632],
      [46.05012, 12.02632],
      [46.05021, 12.0262],
      [46.0503, 12.02608],
      [46.05039, 12.02602],
      [46.05077, 12.0257],
      [46.05113, 12.02559],
      [46.05128, 12.02565],
      [46.0514, 12.02565],
      [46.05151, 12.02557],
      [46.05183, 12.02532],
      [46.05197, 12.02513],
      [46.05209, 12.02506],
      [46.05224, 12.02483],
      [46.05228, 12.02465],
      [46.05235, 12.02453],
      [46.05248, 12.02445],
      [46.05258, 12.0244],
      [46.05271, 12.02436],
      [46.05275, 12.02441],
      [46.05279, 12.02453],
      [46.05284, 12.02458],
      [46.05302, 12.02448],
      [46.05305, 12.02445],
      [46.05312, 12.02427],
      [46.05318, 12.02421],
      [46.0533, 12.02399],
      [46.05339, 12.02399],
      [46.05349, 12.02393],
      [46.05357, 12.02389],
      [46.05367, 12.02387],
      [46.05375, 12.02381],
      [46.05384, 12.0238],
      [46.05388, 12.0239],
      [46.05398, 12.024],
      [46.05403, 12.02411],
      [46.05416, 12.02429],
      [46.0542, 12.0244],
      [46.05441, 12.02467],
      [46.0545, 12.02476],
      [46.05454, 12.02488],
      [46.05462, 12.02494],
      [46.05462, 12.02508],
      [46.05469, 12.0253],
      [46.05471, 12.02535],
      [46.05472, 12.02545],
      [46.05466, 12.02574],
      [46.05464, 12.02586],
      [46.05464, 12.02601],
      [46.05466, 12.02614],
      [46.05461, 12.02627],
      [46.05457, 12.02638],
      [46.05449, 12.02648],
      [46.05448, 12.02662],
      [46.0545, 12.02675],
      [46.05457, 12.02702],
      [46.05473, 12.02714],
      [46.05478, 12.02726],
      [46.05484, 12.02753],
      [46.05484, 12.02758],
      [46.05484, 12.02758],
      [46.05484, 12.02764],
      [46.05486, 12.02772],
      [46.055, 12.02798],
      [46.05502, 12.02814],
      [46.0551, 12.02834],
      [46.0552, 12.02872],
      [46.05523, 12.0289],
      [46.05524, 12.02903],
      [46.05507, 12.0291],
      [46.0548, 12.02927],
      [46.05472, 12.0293],
      [46.05462, 12.02929],
      [46.05455, 12.02938],
      [46.05452, 12.02953],
      [46.05456, 12.02979],
      [46.05462, 12.03006],
      [46.0546, 12.03022],
      [46.05456, 12.03048],
      [46.0545, 12.03058],
      [46.05442, 12.03064],
      [46.05428, 12.03042],
      [46.05412, 12.03027],
      [46.05408, 12.03014],
      [46.054, 12.03008],
      [46.0539, 12.02995],
      [46.05386, 12.02989],
      [46.05374, 12.02977],
      [46.0536, 12.02965],
      [46.05352, 12.02953],
      [46.05338, 12.02938],
      [46.05333, 12.02923],
      [46.05324, 12.02918],
      [46.05309, 12.02908],
      [46.053, 12.029],
      [46.05294, 12.02889],
      [46.05285, 12.02883],
      [46.05266, 12.02881],
      [46.05248, 12.02877],
      [46.05239, 12.02878],
      [46.05231, 12.02882],
      [46.05202, 12.0288],
      [46.05192, 12.02874],
      [46.05189, 12.02861],
      [46.05189, 12.02848],
      [46.05178, 12.02834],
      [46.0517, 12.02821],
      [46.05153, 12.02809],
      [46.0514, 12.028],
      [46.05122, 12.02791],
      [46.05098, 12.02767],
      [46.05077, 12.02753],
      [46.05059, 12.02739],
      [46.05036, 12.0273],
      [46.05019, 12.0272],
      [46.05012, 12.02714],
      [46.04952, 12.02689],
    ] as [number, number][],
    color: colors.paths.liver,
  },
]

export default paths
