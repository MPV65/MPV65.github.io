/**
 * Colour picker
 */

/**
 * Array of colour name objects
 */
const Names = [
    {
        "Name": "Black",
        "Hex": "#000000",
        "R": 0,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Navy blue",
        "Hex": "#000080",
        "R": 0,
        "G": 0,
        "B": 128
    },
    {
        "Name": "Duke blue",
        "Hex": "#00009C",
        "R": 0,
        "G": 0,
        "B": 156
    },
    {
        "Name": "Medium blue",
        "Hex": "#0000CD",
        "R": 0,
        "G": 0,
        "B": 205
    },
    {
        "Name": "Blue",
        "Hex": "#0000FF",
        "R": 0,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Phthalo blue",
        "Hex": "#000F89",
        "R": 0,
        "G": 15,
        "B": 137
    },
    {
        "Name": "Zaffer (Zaffre)",
        "Hex": "#0014A8",
        "R": 0,
        "G": 20,
        "B": 168
    },
    {
        "Name": "Blue (Pantone)",
        "Hex": "#0018A8",
        "R": 0,
        "G": 24,
        "B": 168
    },
    {
        "Name": "Oxford blue",
        "Hex": "#002147",
        "R": 0,
        "G": 33,
        "B": 71
    },
    {
        "Name": "Royal blue (dark)",
        "Hex": "#002366",
        "R": 0,
        "G": 35,
        "B": 102
    },
    {
        "Name": "Resolution blue",
        "Hex": "#002387",
        "R": 0,
        "G": 35,
        "B": 135
    },
    {
        "Name": "Prussian blue",
        "Hex": "#003153",
        "R": 0,
        "G": 49,
        "B": 83
    },
    {
        "Name": "UA blue",
        "Hex": "#0033AA",
        "R": 0,
        "G": 51,
        "B": 170
    },
    {
        "Name": "Yale Blue",
        "Hex": "#00356B",
        "R": 0,
        "G": 53,
        "B": 107
    },
    {
        "Name": "Rich black",
        "Hex": "#004040",
        "R": 0,
        "G": 64,
        "B": 64
    },
    {
        "Name": "Cerulean (RGB)",
        "Hex": "#0040FF",
        "R": 0,
        "G": 64,
        "B": 255
    },
    {
        "Name": "Indigo dye",
        "Hex": "#00416A",
        "R": 0,
        "G": 65,
        "B": 106
    },
    {
        "Name": "British racing green",
        "Hex": "#004225",
        "R": 0,
        "G": 66,
        "B": 37
    },
    {
        "Name": "Warm black",
        "Hex": "#004242",
        "R": 0,
        "G": 66,
        "B": 66
    },
    {
        "Name": "Marian blue",
        "Hex": "#00488B",
        "R": 0,
        "G": 72,
        "B": 139
    },
    {
        "Name": "Absolute Zero",
        "Hex": "#0048BA",
        "R": 0,
        "G": 72,
        "B": 186
    },
    {
        "Name": "Midnight green (eagle green)",
        "Hex": "#004953",
        "R": 0,
        "G": 73,
        "B": 83
    },
    {
        "Name": "Deep jungle green",
        "Hex": "#004B49",
        "R": 0,
        "G": 75,
        "B": 73
    },
    {
        "Name": "USAFA blue",
        "Hex": "#004F98",
        "R": 0,
        "G": 79,
        "B": 152
    },
    {
        "Name": "Gotham green",
        "Hex": "#00573F",
        "R": 0,
        "G": 87,
        "B": 63
    },
    {
        "Name": "Dark green (X11)",
        "Hex": "#006400",
        "R": 0,
        "G": 100,
        "B": 0
    },
    {
        "Name": "Pakistan green",
        "Hex": "#006600",
        "R": 0,
        "G": 102,
        "B": 0
    },
    {
        "Name": "Sapphire blue",
        "Hex": "#0067A5",
        "R": 0,
        "G": 103,
        "B": 165
    },
    {
        "Name": "Cadmium green",
        "Hex": "#006B3C",
        "R": 0,
        "G": 107,
        "B": 60
    },
    {
        "Name": "Honolulu blue",
        "Hex": "#006DB0",
        "R": 0,
        "G": 109,
        "B": 176
    },
    {
        "Name": "Spanish blue",
        "Hex": "#0070B8",
        "R": 0,
        "G": 112,
        "B": 184
    },
    {
        "Name": "French blue",
        "Hex": "#0072BB",
        "R": 0,
        "G": 114,
        "B": 187
    },
    {
        "Name": "Skobeloff",
        "Hex": "#007474",
        "R": 0,
        "G": 116,
        "B": 116
    },
    {
        "Name": "Tropical rainforest",
        "Hex": "#00755E",
        "R": 0,
        "G": 117,
        "B": 94
    },
    {
        "Name": "Cerulean",
        "Hex": "#007BA7",
        "R": 0,
        "G": 123,
        "B": 167
    },
    {
        "Name": "Star command blue",
        "Hex": "#007BB8",
        "R": 0,
        "G": 123,
        "B": 184
    },
    {
        "Name": "Spanish viridian",
        "Hex": "#007F5C",
        "R": 0,
        "G": 127,
        "B": 92
    },
    {
        "Name": "Generic viridian",
        "Hex": "#007F66",
        "R": 0,
        "G": 127,
        "B": 102
    },
    {
        "Name": "Azure",
        "Hex": "#007FFF",
        "R": 0,
        "G": 127,
        "B": 255
    },
    {
        "Name": "Green (web)",
        "Hex": "#008000",
        "R": 0,
        "G": 128,
        "B": 0
    },
    {
        "Name": "Teal",
        "Hex": "#008080",
        "R": 0,
        "G": 128,
        "B": 128
    },
    {
        "Name": "Blue (NCS)",
        "Hex": "#0087BD",
        "R": 0,
        "G": 135,
        "B": 189
    },
    {
        "Name": "Dark cyan",
        "Hex": "#008B8B",
        "R": 0,
        "G": 139,
        "B": 139
    },
    {
        "Name": "Spanish green",
        "Hex": "#009150",
        "R": 0,
        "G": 145,
        "B": 80
    },
    {
        "Name": "Blue (Munsell)",
        "Hex": "#0093AF",
        "R": 0,
        "G": 147,
        "B": 175
    },
    {
        "Name": "Viridian green",
        "Hex": "#009698",
        "R": 0,
        "G": 150,
        "B": 152
    },
    {
        "Name": "Paolo Veronese green",
        "Hex": "#009B7D",
        "R": 0,
        "G": 155,
        "B": 125
    },
    {
        "Name": "Shamrock green",
        "Hex": "#009E60",
        "R": 0,
        "G": 158,
        "B": 96
    },
    {
        "Name": "United Nations blue",
        "Hex": "#009EDB",
        "R": 0,
        "G": 158,
        "B": 219
    },
    {
        "Name": "Green (NCS)",
        "Hex": "#009F6B",
        "R": 0,
        "G": 159,
        "B": 107
    },
    {
        "Name": "Green (pigment)",
        "Hex": "#00A550",
        "R": 0,
        "G": 165,
        "B": 80
    },
    {
        "Name": "Persian green",
        "Hex": "#00A693",
        "R": 0,
        "G": 166,
        "B": 147
    },
    {
        "Name": "Green (Munsell)",
        "Hex": "#00A877",
        "R": 0,
        "G": 168,
        "B": 119
    },
    {
        "Name": "GO green",
        "Hex": "#00AB66",
        "R": 0,
        "G": 171,
        "B": 102
    },
    {
        "Name": "Green (Pantone)",
        "Hex": "#00AD43",
        "R": 0,
        "G": 173,
        "B": 67
    },
    {
        "Name": "Cyan (process)",
        "Hex": "#00B7EB",
        "R": 0,
        "G": 183,
        "B": 235
    },
    {
        "Name": "Process Cyan",
        "Hex": "#00B9F2",
        "R": 0,
        "G": 185,
        "B": 242
    },
    {
        "Name": "Deep sky blue",
        "Hex": "#00BFFF",
        "R": 0,
        "G": 191,
        "B": 255
    },
    {
        "Name": "Caribbean green",
        "Hex": "#00CC99",
        "R": 0,
        "G": 204,
        "B": 153
    },
    {
        "Name": "Robin egg blue",
        "Hex": "#00CCCC",
        "R": 0,
        "G": 204,
        "B": 204
    },
    {
        "Name": "Vivid sky blue",
        "Hex": "#00CCFF",
        "R": 0,
        "G": 204,
        "B": 255
    },
    {
        "Name": "Dark turquoise",
        "Hex": "#00CED1",
        "R": 0,
        "G": 206,
        "B": 209
    },
    {
        "Name": "Medium spring green",
        "Hex": "#00FA9A",
        "R": 0,
        "G": 250,
        "B": 154
    },
    {
        "Name": "Green",
        "Hex": "#00FF00",
        "R": 0,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Erin",
        "Hex": "#00FF40",
        "R": 0,
        "G": 255,
        "B": 64
    },
    {
        "Name": "Spring green",
        "Hex": "#00FF80",
        "R": 0,
        "G": 255,
        "B": 128
    },
    {
        "Name": "Technobotanica",
        "Hex": "#00FFBF",
        "R": 0,
        "G": 255,
        "B": 191
    },
    {
        "Name": "Sea green (Crayola)",
        "Hex": "#00FFCD",
        "R": 0,
        "G": 255,
        "B": 205
    },
    {
        "Name": "Turquoise blue",
        "Hex": "#00FFEF",
        "R": 0,
        "G": 255,
        "B": 239
    },
    {
        "Name": "Spanish sky blue",
        "Hex": "#00FFFE",
        "R": 0,
        "G": 255,
        "B": 254
    },
    {
        "Name": "Cyan",
        "Hex": "#00FFFF",
        "R": 0,
        "G": 255,
        "B": 255
    },
    {
        "Name": "Rich black (FOGRA39)",
        "Hex": "#010203",
        "R": 1,
        "G": 2,
        "B": 3
    },
    {
        "Name": "Rich black (FOGRA29)",
        "Hex": "#010B13",
        "R": 1,
        "G": 11,
        "B": 19
    },
    {
        "Name": "UP Forest green",
        "Hex": "#014421",
        "R": 1,
        "G": 68,
        "B": 33
    },
    {
        "Name": "Pine green",
        "Hex": "#01796F",
        "R": 1,
        "G": 121,
        "B": 111
    },
    {
        "Name": "Sacramento State green",
        "Hex": "#043927",
        "R": 4,
        "G": 57,
        "B": 39
    },
    {
        "Name": "Metallic Seaweed",
        "Hex": "#0A7E8C",
        "R": 10,
        "G": 126,
        "B": 140
    },
    {
        "Name": "Tiffany Blue",
        "Hex": "#0ABAB5",
        "R": 10,
        "G": 186,
        "B": 181
    },
    {
        "Name": "Malachite",
        "Hex": "#0BDA51",
        "R": 11,
        "G": 218,
        "B": 81
    },
    {
        "Name": "Xbox green",
        "Hex": "#0E7A0D",
        "R": 14,
        "G": 122,
        "B": 13
    },
    {
        "Name": "Sapphire",
        "Hex": "#0F52BA",
        "R": 15,
        "G": 82,
        "B": 186
    },
    {
        "Name": "Smoky black",
        "Hex": "#100C08",
        "R": 16,
        "G": 12,
        "B": 8
    },
    {
        "Name": "Green-blue",
        "Hex": "#1164B4",
        "R": 17,
        "G": 100,
        "B": 180
    },
    {
        "Name": "Phthalo green",
        "Hex": "#123524",
        "R": 18,
        "G": 53,
        "B": 36
    },
    {
        "Name": "Blue sapphire",
        "Hex": "#126180",
        "R": 18,
        "G": 97,
        "B": 128
    },
    {
        "Name": "International Klein Blue",
        "Hex": "#130a8f",
        "R": 19,
        "G": 10,
        "B": 143
    },
    {
        "Name": "India green",
        "Hex": "#138808",
        "R": 19,
        "G": 136,
        "B": 8
    },
    {
        "Name": "Denim",
        "Hex": "#1560BD",
        "R": 21,
        "G": 96,
        "B": 189
    },
    {
        "Name": "Dark spring green",
        "Hex": "#177245",
        "R": 23,
        "G": 114,
        "B": 69
    },
    {
        "Name": "MSU green",
        "Hex": "#18453B",
        "R": 24,
        "G": 69,
        "B": 59
    },
    {
        "Name": "Weezy Blue",
        "Hex": "#189BCC",
        "R": 24,
        "G": 155,
        "B": 204
    },
    {
        "Name": "Midnight blue",
        "Hex": "#191970",
        "R": 25,
        "G": 25,
        "B": 112
    },
    {
        "Name": "Lincoln green",
        "Hex": "#195905",
        "R": 25,
        "G": 89,
        "B": 5
    },
    {
        "Name": "Navy blue (Crayola)",
        "Hex": "#1974D2",
        "R": 25,
        "G": 116,
        "B": 210
    },
    {
        "Name": "Dark jungle green",
        "Hex": "#1A2421",
        "R": 26,
        "G": 36,
        "B": 33
    },
    {
        "Name": "Eerie black",
        "Hex": "#1B1B1B",
        "R": 27,
        "G": 27,
        "B": 27
    },
    {
        "Name": "Trypan Blue",
        "Hex": "#1C05B3",
        "R": 28,
        "G": 5,
        "B": 179
    },
    {
        "Name": "Persian blue",
        "Hex": "#1C39BB",
        "R": 28,
        "G": 57,
        "B": 187
    },
    {
        "Name": "Pacific blue",
        "Hex": "#1CA9C9",
        "R": 28,
        "G": 169,
        "B": 201
    },
    {
        "Name": "Green (Crayola)",
        "Hex": "#1CAC78",
        "R": 28,
        "G": 172,
        "B": 120
    },
    {
        "Name": "Space cadet",
        "Hex": "#1D2951",
        "R": 29,
        "G": 41,
        "B": 81
    },
    {
        "Name": "Cerulean (Crayola)",
        "Hex": "#1DACD6",
        "R": 29,
        "G": 172,
        "B": 214
    },
    {
        "Name": "Dodger blue",
        "Hex": "#1E90FF",
        "R": 30,
        "G": 144,
        "B": 255
    },
    {
        "Name": "Paua",
        "Hex": "#1F005E",
        "R": 31,
        "G": 0,
        "B": 94
    },
    {
        "Name": "Blue (Crayola)",
        "Hex": "#1F75FE",
        "R": 31,
        "G": 117,
        "B": 254
    },
    {
        "Name": "Zydeco",
        "Hex": "#20483F",
        "R": 32,
        "G": 72,
        "B": 63
    },
    {
        "Name": "Light sea green",
        "Hex": "#20B2AA",
        "R": 32,
        "G": 178,
        "B": 170
    },
    {
        "Name": "New Car",
        "Hex": "#214FC6",
        "R": 33,
        "G": 79,
        "B": 198
    },
    {
        "Name": "Denim blue",
        "Hex": "#2243B6",
        "R": 34,
        "G": 67,
        "B": 182
    },
    {
        "Name": "Forest green (web)",
        "Hex": "#228B22",
        "R": 34,
        "G": 139,
        "B": 34
    },
    {
        "Name": "St. Patrick's blue",
        "Hex": "#23297A",
        "R": 35,
        "G": 41,
        "B": 122
    },
    {
        "Name": "Raisin black",
        "Hex": "#242124",
        "R": 36,
        "G": 33,
        "B": 36
    },
    {
        "Name": "Lapis lazuli",
        "Hex": "#26619C",
        "R": 38,
        "G": 97,
        "B": 156
    },
    {
        "Name": "Slimy green",
        "Hex": "#299617",
        "R": 41,
        "G": 150,
        "B": 23
    },
    {
        "Name": "Jungle green",
        "Hex": "#29AB87",
        "R": 41,
        "G": 171,
        "B": 135
    },
    {
        "Name": "Pine green",
        "Hex": "#2A2F23",
        "R": 42,
        "G": 47,
        "B": 35
    },
    {
        "Name": "Gunmetal",
        "Hex": "#2a3439",
        "R": 42,
        "G": 52,
        "B": 57
    },
    {
        "Name": "Cerulean blue",
        "Hex": "#2A52BE",
        "R": 42,
        "G": 82,
        "B": 190
    },
    {
        "Name": "Zinnwaldite brown",
        "Hex": "#2C1608",
        "R": 44,
        "G": 22,
        "B": 8
    },
    {
        "Name": "Outer space (Crayola)",
        "Hex": "#2D383A",
        "R": 45,
        "G": 56,
        "B": 58
    },
    {
        "Name": "Sapphire (Crayola)",
        "Hex": "#2D5DA1",
        "R": 45,
        "G": 93,
        "B": 161
    },
    {
        "Name": "True Blue",
        "Hex": "#2D68C4",
        "R": 45,
        "G": 104,
        "B": 196
    },
    {
        "Name": "Picotee blue",
        "Hex": "#2E2787",
        "R": 46,
        "G": 39,
        "B": 135
    },
    {
        "Name": "Cosmic cobalt",
        "Hex": "#2E2D88",
        "R": 46,
        "G": 45,
        "B": 136
    },
    {
        "Name": "YInMn Blue",
        "Hex": "#2E5090",
        "R": 46,
        "G": 80,
        "B": 144
    },
    {
        "Name": "B'dazzled blue",
        "Hex": "#2E5894",
        "R": 46,
        "G": 88,
        "B": 148
    },
    {
        "Name": "Sea green",
        "Hex": "#2E8B57",
        "R": 46,
        "G": 139,
        "B": 87
    },
    {
        "Name": "Dark slate gray",
        "Hex": "#2F4F4F",
        "R": 47,
        "G": 79,
        "B": 79
    },
    {
        "Name": "Dark purple",
        "Hex": "#301934",
        "R": 48,
        "G": 25,
        "B": 52
    },
    {
        "Name": "Yellow-green (Color Wheel)",
        "Hex": "#30B21A",
        "R": 48,
        "G": 178,
        "B": 26
    },
    {
        "Name": "Mountain Meadow",
        "Hex": "#30BA8F",
        "R": 48,
        "G": 186,
        "B": 143
    },
    {
        "Name": "Maximum blue green",
        "Hex": "#30BFBF",
        "R": 48,
        "G": 191,
        "B": 191
    },
    {
        "Name": "Myrtle green",
        "Hex": "#317873",
        "R": 49,
        "G": 120,
        "B": 115
    },
    {
        "Name": "Bleu de France",
        "Hex": "#318CE7",
        "R": 49,
        "G": 140,
        "B": 231
    },
    {
        "Name": "Illuminating emerald",
        "Hex": "#319177",
        "R": 49,
        "G": 145,
        "B": 119
    },
    {
        "Name": "Persian indigo",
        "Hex": "#32127A",
        "R": 50,
        "G": 18,
        "B": 122
    },
    {
        "Name": "Russian violet",
        "Hex": "#32174D",
        "R": 50,
        "G": 23,
        "B": 77
    },
    {
        "Name": "Violet-blue",
        "Hex": "#324AB2",
        "R": 50,
        "G": 74,
        "B": 178
    },
    {
        "Name": "Lime green",
        "Hex": "#32CD32",
        "R": 50,
        "G": 205,
        "B": 50
    },
    {
        "Name": "Blue (pigment)",
        "Hex": "#333399",
        "R": 51,
        "G": 51,
        "B": 153
    },
    {
        "Name": "Strong Lime Green",
        "Hex": "#33CC33",
        "R": 51,
        "G": 204,
        "B": 51
    },
    {
        "Name": "Jet",
        "Hex": "#343434",
        "R": 52,
        "G": 52,
        "B": 52
    },
    {
        "Name": "Onyx",
        "Hex": "#353839",
        "R": 53,
        "G": 56,
        "B": 57
    },
    {
        "Name": "Hunter green",
        "Hex": "#355E3B",
        "R": 53,
        "G": 94,
        "B": 59
    },
    {
        "Name": "Charcoal",
        "Hex": "#36454F",
        "R": 54,
        "G": 69,
        "B": 79
    },
    {
        "Name": "Ming",
        "Hex": "#36747D",
        "R": 54,
        "G": 116,
        "B": 125
    },
    {
        "Name": "Teal blue",
        "Hex": "#367588",
        "R": 54,
        "G": 117,
        "B": 136
    },
    {
        "Name": "Zomp",
        "Hex": "#39A78E",
        "R": 57,
        "G": 167,
        "B": 142
    },
    {
        "Name": "Neon green",
        "Hex": "#39FF14",
        "R": 57,
        "G": 255,
        "B": 20
    },
    {
        "Name": "Keppel",
        "Hex": "#3AB09E",
        "R": 58,
        "G": 176,
        "B": 158
    },
    {
        "Name": "Black olive",
        "Hex": "#3B3C36",
        "R": 59,
        "G": 60,
        "B": 54
    },
    {
        "Name": "Amazon",
        "Hex": "#3B7A57",
        "R": 59,
        "G": 122,
        "B": 87
    },
    {
        "Name": "Dark sienna",
        "Hex": "#3C1414",
        "R": 60,
        "G": 20,
        "B": 20
    },
    {
        "Name": "Olive Drab #7",
        "Hex": "#3C341F",
        "R": 60,
        "G": 52,
        "B": 31
    },
    {
        "Name": "Bluetiful",
        "Hex": "#3C69E7",
        "R": 60,
        "G": 105,
        "B": 231
    },
    {
        "Name": "Medium sea green",
        "Hex": "#3CB371",
        "R": 60,
        "G": 179,
        "B": 113
    },
    {
        "Name": "Black bean",
        "Hex": "#3D0C02",
        "R": 61,
        "G": 12,
        "B": 2
    },
    {
        "Name": "Bistre",
        "Hex": "#3D2B1F",
        "R": 61,
        "G": 43,
        "B": 31
    },
    {
        "Name": "Android green",
        "Hex": "#3DDC84",
        "R": 61,
        "G": 220,
        "B": 132
    },
    {
        "Name": "Tufts blue",
        "Hex": "#3E8EDE",
        "R": 62,
        "G": 142,
        "B": 222
    },
    {
        "Name": "Mint",
        "Hex": "#3EB489",
        "R": 62,
        "G": 180,
        "B": 137
    },
    {
        "Name": "Ultramarine",
        "Hex": "#3F00FF",
        "R": 63,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Harlequin",
        "Hex": "#3FFF00",
        "R": 63,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Viridian",
        "Hex": "#40826D",
        "R": 64,
        "G": 130,
        "B": 109
    },
    {
        "Name": "Turquoise",
        "Hex": "#40E0D0",
        "R": 64,
        "G": 224,
        "B": 208
    },
    {
        "Name": "Xumo",
        "Hex": "#413639",
        "R": 65,
        "G": 54,
        "B": 57
    },
    {
        "Name": "Ultramarine blue",
        "Hex": "#4166F5",
        "R": 65,
        "G": 102,
        "B": 245
    },
    {
        "Name": "Royal blue (light)",
        "Hex": "#4169E1",
        "R": 65,
        "G": 105,
        "B": 225
    },
    {
        "Name": "Old burgundy",
        "Hex": "#43302E",
        "R": 67,
        "G": 48,
        "B": 46
    },
    {
        "Name": "Queen blue",
        "Hex": "#436B95",
        "R": 67,
        "G": 107,
        "B": 149
    },
    {
        "Name": "Verdigris",
        "Hex": "#43B3AE",
        "R": 67,
        "G": 179,
        "B": 174
    },
    {
        "Name": "Rifle green",
        "Hex": "#444C38",
        "R": 68,
        "G": 76,
        "B": 56
    },
    {
        "Name": "Xander",
        "Hex": "#44500C",
        "R": 68,
        "G": 80,
        "B": 12
    },
    {
        "Name": "Neon blue",
        "Hex": "#4666FF",
        "R": 70,
        "G": 102,
        "B": 255
    },
    {
        "Name": "Steel blue",
        "Hex": "#4682B4",
        "R": 70,
        "G": 130,
        "B": 180
    },
    {
        "Name": "Petunia",
        "Hex": "#470659",
        "R": 71,
        "G": 6,
        "B": 89
    },
    {
        "Name": "Maximum blue",
        "Hex": "#47ABCC",
        "R": 71,
        "G": 171,
        "B": 204
    },
    {
        "Name": "Taupe",
        "Hex": "#483C32",
        "R": 72,
        "G": 60,
        "B": 50
    },
    {
        "Name": "Dark slate blue",
        "Hex": "#483D8B",
        "R": 72,
        "G": 61,
        "B": 139
    },
    {
        "Name": "Medium turquoise",
        "Hex": "#48D1CC",
        "R": 72,
        "G": 209,
        "B": 204
    },
    {
        "Name": "Hooker's green",
        "Hex": "#49796B",
        "R": 73,
        "G": 121,
        "B": 107
    },
    {
        "Name": "Oxblood",
        "Hex": "#4A0000",
        "R": 74,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Drab dark brown",
        "Hex": "#4A412A",
        "R": 74,
        "G": 65,
        "B": 42
    },
    {
        "Name": "Deep Space Sparkle",
        "Hex": "#4A646C",
        "R": 74,
        "G": 100,
        "B": 108
    },
    {
        "Name": "Café noir",
        "Hex": "#4B3621",
        "R": 75,
        "G": 54,
        "B": 33
    },
    {
        "Name": "Artichoke green",
        "Hex": "#4B6F44",
        "R": 75,
        "G": 111,
        "B": 68
    },
    {
        "Name": "Spanish violet",
        "Hex": "#4C2882",
        "R": 76,
        "G": 40,
        "B": 130
    },
    {
        "Name": "Independence",
        "Hex": "#4C516D",
        "R": 76,
        "G": 81,
        "B": 109
    },
    {
        "Name": "May green",
        "Hex": "#4C9141",
        "R": 76,
        "G": 145,
        "B": 65
    },
    {
        "Name": "Kelly green",
        "Hex": "#4CBB17",
        "R": 76,
        "G": 187,
        "B": 23
    },
    {
        "Name": "Middle green",
        "Hex": "#4D8C57",
        "R": 77,
        "G": 140,
        "B": 87
    },
    {
        "Name": "Purple navy",
        "Hex": "#4E5180",
        "R": 78,
        "G": 81,
        "B": 128
    },
    {
        "Name": "Fern green",
        "Hex": "#4F7942",
        "R": 79,
        "G": 121,
        "B": 66
    },
    {
        "Name": "Blue yonder",
        "Hex": "#5072A7",
        "R": 80,
        "G": 114,
        "B": 167
    },
    {
        "Name": "Sap green",
        "Hex": "#507D2A",
        "R": 80,
        "G": 125,
        "B": 42
    },
    {
        "Name": "Emerald",
        "Hex": "#50C878",
        "R": 80,
        "G": 200,
        "B": 120
    },
    {
        "Name": "KSU purple",
        "Hex": "#512888",
        "R": 81,
        "G": 40,
        "B": 136
    },
    {
        "Name": "Vantg blue",
        "Hex": "#5271FF",
        "R": 82,
        "G": 113,
        "B": 255
    },
    {
        "Name": "Dark electric blue",
        "Hex": "#536878",
        "R": 83,
        "G": 104,
        "B": 120
    },
    {
        "Name": "Dark liver (horses)",
        "Hex": "#543D37",
        "R": 84,
        "G": 61,
        "B": 55
    },
    {
        "Name": "Liberty",
        "Hex": "#545AA7",
        "R": 84,
        "G": 90,
        "B": 167
    },
    {
        "Name": "Black coral",
        "Hex": "#54626F",
        "R": 84,
        "G": 98,
        "B": 111
    },
    {
        "Name": "Davy's grey",
        "Hex": "#555555",
        "R": 85,
        "G": 85,
        "B": 85
    },
    {
        "Name": "Ebony",
        "Hex": "#555D50",
        "R": 85,
        "G": 93,
        "B": 80
    },
    {
        "Name": "Dark olive green",
        "Hex": "#556B2F",
        "R": 85,
        "G": 107,
        "B": 47
    },
    {
        "Name": "English violet",
        "Hex": "#563C5C",
        "R": 86,
        "G": 60,
        "B": 92
    },
    {
        "Name": "Wintergreen Dream",
        "Hex": "#56887D",
        "R": 86,
        "G": 136,
        "B": 125
    },
    {
        "Name": "Carolina blue",
        "Hex": "#56A0D3",
        "R": 86,
        "G": 160,
        "B": 211
    },
    {
        "Name": "Cyber grape",
        "Hex": "#58427C",
        "R": 88,
        "G": 66,
        "B": 124
    },
    {
        "Name": "Seal brown",
        "Hex": "#59260B",
        "R": 89,
        "G": 38,
        "B": 11
    },
    {
        "Name": "Plump Purple",
        "Hex": "#5946B2",
        "R": 89,
        "G": 70,
        "B": 178
    },
    {
        "Name": "Japanese violet",
        "Hex": "#5B3256",
        "R": 91,
        "G": 50,
        "B": 86
    },
    {
        "Name": "Dark byzantium",
        "Hex": "#5D3954",
        "R": 93,
        "G": 57,
        "B": 84
    },
    {
        "Name": "Polished Pine",
        "Hex": "#5DA493",
        "R": 93,
        "G": 164,
        "B": 147
    },
    {
        "Name": "Blue jeans",
        "Hex": "#5DADEC",
        "R": 93,
        "G": 173,
        "B": 236
    },
    {
        "Name": "Maximum green",
        "Hex": "#5E8C31",
        "R": 94,
        "G": 140,
        "B": 49
    },
    {
        "Name": "Cadet blue",
        "Hex": "#5F9EA0",
        "R": 95,
        "G": 158,
        "B": 160
    },
    {
        "Name": "Shiny Shamrock",
        "Hex": "#5FA778",
        "R": 95,
        "G": 167,
        "B": 120
    },
    {
        "Name": "Majorelle blue",
        "Hex": "#6050DC",
        "R": 96,
        "G": 80,
        "B": 220
    },
    {
        "Name": "Glaucous",
        "Hex": "#6082B6",
        "R": 96,
        "G": 130,
        "B": 182
    },
    {
        "Name": "Seance",
        "Hex": "#612086",
        "R": 97,
        "G": 32,
        "B": 134
    },
    {
        "Name": "Eggplant",
        "Hex": "#614051",
        "R": 97,
        "G": 64,
        "B": 81
    },
    {
        "Name": "Umber",
        "Hex": "#635147",
        "R": 99,
        "G": 81,
        "B": 71
    },
    {
        "Name": "Pullman Brown (UPS Brown)",
        "Hex": "#644117",
        "R": 100,
        "G": 65,
        "B": 23
    },
    {
        "Name": "Cornflower blue",
        "Hex": "#6495ED",
        "R": 100,
        "G": 149,
        "B": 237
    },
    {
        "Name": "Rosewood",
        "Hex": "#65000B",
        "R": 101,
        "G": 0,
        "B": 11
    },
    {
        "Name": "Dark brown",
        "Hex": "#654321",
        "R": 101,
        "G": 67,
        "B": 33
    },
    {
        "Name": "Zinc gray",
        "Hex": "#655B55",
        "R": 101,
        "G": 91,
        "B": 85
    },
    {
        "Name": "Blood red",
        "Hex": "#660000",
        "R": 102,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Tyrian purple",
        "Hex": "#66023C",
        "R": 102,
        "G": 2,
        "B": 60
    },
    {
        "Name": "Rebecca Purple",
        "Hex": "#663399",
        "R": 102,
        "G": 51,
        "B": 153
    },
    {
        "Name": "Van Dyke brown",
        "Hex": "#664228",
        "R": 102,
        "G": 66,
        "B": 40
    },
    {
        "Name": "Antique bronze",
        "Hex": "#665D1E",
        "R": 102,
        "G": 93,
        "B": 30
    },
    {
        "Name": "Blue-gray (Crayola)",
        "Hex": "#6699CC",
        "R": 102,
        "G": 153,
        "B": 204
    },
    {
        "Name": "Medium aquamarine",
        "Hex": "#66DDAA",
        "R": 102,
        "G": 221,
        "B": 170
    },
    {
        "Name": "Screamin' Green",
        "Hex": "#66FF66",
        "R": 102,
        "G": 255,
        "B": 102
    },
    {
        "Name": "Old mauve",
        "Hex": "#673147",
        "R": 103,
        "G": 49,
        "B": 71
    },
    {
        "Name": "Rose ebony",
        "Hex": "#674846",
        "R": 103,
        "G": 72,
        "B": 70
    },
    {
        "Name": "Liver",
        "Hex": "#674C47",
        "R": 103,
        "G": 76,
        "B": 71
    },
    {
        "Name": "Granite gray",
        "Hex": "#676767",
        "R": 103,
        "G": 103,
        "B": 103
    },
    {
        "Name": "Russian green",
        "Hex": "#679267",
        "R": 103,
        "G": 146,
        "B": 103
    },
    {
        "Name": "Palatinate purple",
        "Hex": "#682860",
        "R": 104,
        "G": 40,
        "B": 96
    },
    {
        "Name": "Finn",
        "Hex": "#683068",
        "R": 104,
        "G": 48,
        "B": 104
    },
    {
        "Name": "Dim gray",
        "Hex": "#696969",
        "R": 105,
        "G": 105,
        "B": 105
    },
    {
        "Name": "Purple",
        "Hex": "#6A0DAD",
        "R": 106,
        "G": 13,
        "B": 173
    },
    {
        "Name": "Slate blue",
        "Hex": "#6A5ACD",
        "R": 106,
        "G": 90,
        "B": 205
    },
    {
        "Name": "Indigo",
        "Hex": "#6A5DFF",
        "R": 106,
        "G": 93,
        "B": 255
    },
    {
        "Name": "Kobicha",
        "Hex": "#6B4423",
        "R": 107,
        "G": 68,
        "B": 35
    },
    {
        "Name": "Olive Drab (#3)",
        "Hex": "#6B8E23",
        "R": 107,
        "G": 142,
        "B": 35
    },
    {
        "Name": "Zinzolin",
        "Hex": "#6C0277",
        "R": 108,
        "G": 2,
        "B": 119
    },
    {
        "Name": "Liver (organ)",
        "Hex": "#6C2E1F",
        "R": 108,
        "G": 46,
        "B": 31
    },
    {
        "Name": "Eminence",
        "Hex": "#6C3082",
        "R": 108,
        "G": 48,
        "B": 130
    },
    {
        "Name": "Field drab",
        "Hex": "#6C541E",
        "R": 108,
        "G": 84,
        "B": 30
    },
    {
        "Name": "Little boy blue",
        "Hex": "#6CA0DC",
        "R": 108,
        "G": 160,
        "B": 220
    },
    {
        "Name": "Cerulean frost",
        "Hex": "#6D9BC3",
        "R": 109,
        "G": 155,
        "B": 195
    },
    {
        "Name": "Green Sheen",
        "Hex": "#6EAEA1",
        "R": 110,
        "G": 174,
        "B": 161
    },
    {
        "Name": "Coffee",
        "Hex": "#6F4E37",
        "R": 111,
        "G": 78,
        "B": 55
    },
    {
        "Name": "Persian plum",
        "Hex": "#701C1C",
        "R": 112,
        "G": 28,
        "B": 28
    },
    {
        "Name": "Midnight",
        "Hex": "#702670",
        "R": 112,
        "G": 38,
        "B": 112
    },
    {
        "Name": "Byzantium",
        "Hex": "#702963",
        "R": 112,
        "G": 41,
        "B": 99
    },
    {
        "Name": "Catawba",
        "Hex": "#703642",
        "R": 112,
        "G": 54,
        "B": 66
    },
    {
        "Name": "Sepia",
        "Hex": "#704214",
        "R": 112,
        "G": 66,
        "B": 20
    },
    {
        "Name": "Slate gray",
        "Hex": "#708090",
        "R": 112,
        "G": 128,
        "B": 144
    },
    {
        "Name": "Iceberg",
        "Hex": "#71A6D2",
        "R": 113,
        "G": 166,
        "B": 210
    },
    {
        "Name": "Wine",
        "Hex": "#722F37",
        "R": 114,
        "G": 47,
        "B": 55
    },
    {
        "Name": "Nickel",
        "Hex": "#727472",
        "R": 114,
        "G": 116,
        "B": 114
    },
    {
        "Name": "Air superiority blue",
        "Hex": "#72A0C1",
        "R": 114,
        "G": 160,
        "B": 193
    },
    {
        "Name": "Maximum purple",
        "Hex": "#733380",
        "R": 115,
        "G": 51,
        "B": 128
    },
    {
        "Name": "Xanadu",
        "Hex": "#738678",
        "R": 115,
        "G": 134,
        "B": 120
    },
    {
        "Name": "Maya blue",
        "Hex": "#73C2FB",
        "R": 115,
        "G": 194,
        "B": 251
    },
    {
        "Name": "Mantis",
        "Hex": "#74C365",
        "R": 116,
        "G": 195,
        "B": 101
    },
    {
        "Name": "Sonic silver",
        "Hex": "#757575",
        "R": 117,
        "G": 117,
        "B": 117
    },
    {
        "Name": "Secret",
        "Hex": "#764374",
        "R": 118,
        "G": 67,
        "B": 116
    },
    {
        "Name": "Violet-blue (Crayola)",
        "Hex": "#766EC8",
        "R": 118,
        "G": 110,
        "B": 200
    },
    {
        "Name": "Sky blue (Crayola)",
        "Hex": "#76D7EA",
        "R": 118,
        "G": 215,
        "B": 234
    },
    {
        "Name": "Rhythm",
        "Hex": "#777696",
        "R": 119,
        "G": 118,
        "B": 150
    },
    {
        "Name": "Light slate gray",
        "Hex": "#778899",
        "R": 119,
        "G": 136,
        "B": 153
    },
    {
        "Name": "Shadow blue",
        "Hex": "#778BA5",
        "R": 119,
        "G": 139,
        "B": 165
    },
    {
        "Name": "French sky blue",
        "Hex": "#77B5FE",
        "R": 119,
        "G": 181,
        "B": 254
    },
    {
        "Name": "Pansy purple",
        "Hex": "#78184A",
        "R": 120,
        "G": 24,
        "B": 74
    },
    {
        "Name": "Royal purple",
        "Hex": "#7851A9",
        "R": 120,
        "G": 81,
        "B": 169
    },
    {
        "Name": "Bole",
        "Hex": "#79443B",
        "R": 121,
        "G": 68,
        "B": 59
    },
    {
        "Name": "Old lavender",
        "Hex": "#796878",
        "R": 121,
        "G": 104,
        "B": 120
    },
    {
        "Name": "UP maroon",
        "Hex": "#7B1113",
        "R": 123,
        "G": 17,
        "B": 19
    },
    {
        "Name": "Chocolate (traditional)",
        "Hex": "#7B3F00",
        "R": 123,
        "G": 63,
        "B": 0
    },
    {
        "Name": "Medium slate blue",
        "Hex": "#7B68EE",
        "R": 123,
        "G": 104,
        "B": 238
    },
    {
        "Name": "Bud green",
        "Hex": "#7BB661",
        "R": 123,
        "G": 182,
        "B": 97
    },
    {
        "Name": "Barn red",
        "Hex": "#7C0A02",
        "R": 124,
        "G": 10,
        "B": 2
    },
    {
        "Name": "Tuscan red",
        "Hex": "#7C4848",
        "R": 124,
        "G": 72,
        "B": 72
    },
    {
        "Name": "Aero",
        "Hex": "#7CB9E8",
        "R": 124,
        "G": 185,
        "B": 232
    },
    {
        "Name": "Lawn green",
        "Hex": "#7CFC00",
        "R": 124,
        "G": 252,
        "B": 0
    },
    {
        "Name": "Deep taupe",
        "Hex": "#7E5E60",
        "R": 126,
        "G": 94,
        "B": 96
    },
    {
        "Name": "Middle blue",
        "Hex": "#7ED4E6",
        "R": 126,
        "G": 212,
        "B": 230
    },
    {
        "Name": "Claret",
        "Hex": "#7F1734",
        "R": 127,
        "G": 23,
        "B": 52
    },
    {
        "Name": "Aquamarine",
        "Hex": "#7FFFD4",
        "R": 127,
        "G": 255,
        "B": 212
    },
    {
        "Name": "Maroon (web)",
        "Hex": "#800000",
        "R": 128,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Burgundy",
        "Hex": "#800020",
        "R": 128,
        "G": 0,
        "B": 32
    },
    {
        "Name": "Purple (web)",
        "Hex": "#800080",
        "R": 128,
        "G": 0,
        "B": 128
    },
    {
        "Name": "Violet",
        "Hex": "#8000FF",
        "R": 128,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Falu red",
        "Hex": "#801818",
        "R": 128,
        "G": 24,
        "B": 24
    },
    {
        "Name": "Russet",
        "Hex": "#80461B",
        "R": 128,
        "G": 70,
        "B": 27
    },
    {
        "Name": "Zircon gray",
        "Hex": "#807473",
        "R": 128,
        "G": 116,
        "B": 115
    },
    {
        "Name": "Spanish bistre",
        "Hex": "#807532",
        "R": 128,
        "G": 117,
        "B": 50
    },
    {
        "Name": "Olive",
        "Hex": "#808000",
        "R": 128,
        "G": 128,
        "B": 0
    },
    {
        "Name": "Gray (web)",
        "Hex": "#808080",
        "R": 128,
        "G": 128,
        "B": 128
    },
    {
        "Name": "Chartreuse (web)",
        "Hex": "#80FF00",
        "R": 128,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Coyote brown",
        "Hex": "#81613C",
        "R": 129,
        "G": 97,
        "B": 60
    },
    {
        "Name": "Raw umber",
        "Hex": "#826644",
        "R": 130,
        "G": 102,
        "B": 68
    },
    {
        "Name": "Roman silver",
        "Hex": "#838996",
        "R": 131,
        "G": 137,
        "B": 150
    },
    {
        "Name": "OU Crimson red",
        "Hex": "#841617",
        "R": 132,
        "G": 22,
        "B": 23
    },
    {
        "Name": "Antique ruby",
        "Hex": "#841B2D",
        "R": 132,
        "G": 27,
        "B": 45
    },
    {
        "Name": "Battleship grey",
        "Hex": "#848482",
        "R": 132,
        "G": 132,
        "B": 130
    },
    {
        "Name": "Chinese violet",
        "Hex": "#856088",
        "R": 133,
        "G": 96,
        "B": 136
    },
    {
        "Name": "French bistre",
        "Hex": "#856D4D",
        "R": 133,
        "G": 109,
        "B": 77
    },
    {
        "Name": "Gold Fusion",
        "Hex": "#85754E",
        "R": 133,
        "G": 117,
        "B": 78
    },
    {
        "Name": "Violet (RYB)",
        "Hex": "#8601AF",
        "R": 134,
        "G": 1,
        "B": 175
    },
    {
        "Name": "French lilac",
        "Hex": "#86608E",
        "R": 134,
        "G": 96,
        "B": 142
    },
    {
        "Name": "Tourmaline",
        "Hex": "#86A1A9",
        "R": 134,
        "G": 161,
        "B": 169
    },
    {
        "Name": "Fuzzy Wuzzy",
        "Hex": "#87421F",
        "R": 135,
        "G": 66,
        "B": 31
    },
    {
        "Name": "Sky blue",
        "Hex": "#87CEEB",
        "R": 135,
        "G": 206,
        "B": 235
    },
    {
        "Name": "Light sky blue",
        "Hex": "#87CEFA",
        "R": 135,
        "G": 206,
        "B": 250
    },
    {
        "Name": "Spring Frost",
        "Hex": "#87FF2A",
        "R": 135,
        "G": 255,
        "B": 42
    },
    {
        "Name": "Mardi Gras",
        "Hex": "#880085",
        "R": 136,
        "G": 0,
        "B": 133
    },
    {
        "Name": "French violet",
        "Hex": "#8806CE",
        "R": 136,
        "G": 6,
        "B": 206
    },
    {
        "Name": "Sienna",
        "Hex": "#882D17",
        "R": 136,
        "G": 45,
        "B": 23
    },
    {
        "Name": "Solid pink",
        "Hex": "#893843",
        "R": 137,
        "G": 56,
        "B": 67
    },
    {
        "Name": "Cordovan",
        "Hex": "#893F45",
        "R": 137,
        "G": 63,
        "B": 69
    },
    {
        "Name": "Baby blue",
        "Hex": "#89CFF0",
        "R": 137,
        "G": 207,
        "B": 240
    },
    {
        "Name": "Blue-violet",
        "Hex": "#8A2BE2",
        "R": 138,
        "G": 43,
        "B": 226
    },
    {
        "Name": "Burnt umber",
        "Hex": "#8A3324",
        "R": 138,
        "G": 51,
        "B": 36
    },
    {
        "Name": "Twilight lavender",
        "Hex": "#8A496B",
        "R": 138,
        "G": 73,
        "B": 107
    },
    {
        "Name": "Shadow",
        "Hex": "#8A795D",
        "R": 138,
        "G": 121,
        "B": 93
    },
    {
        "Name": "Rocket metallic",
        "Hex": "#8A7F80",
        "R": 138,
        "G": 127,
        "B": 128
    },
    {
        "Name": "Moss green",
        "Hex": "#8A9A5B",
        "R": 138,
        "G": 154,
        "B": 91
    },
    {
        "Name": "Dark red",
        "Hex": "#8B0000",
        "R": 139,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Dark magenta",
        "Hex": "#8B008B",
        "R": 139,
        "G": 0,
        "B": 139
    },
    {
        "Name": "Saddle brown",
        "Hex": "#8B4513",
        "R": 139,
        "G": 69,
        "B": 19
    },
    {
        "Name": "Middle blue purple",
        "Hex": "#8B72BE",
        "R": 139,
        "G": 114,
        "B": 190
    },
    {
        "Name": "Taupe gray",
        "Hex": "#8B8589",
        "R": 139,
        "G": 133,
        "B": 137
    },
    {
        "Name": "Middle grey",
        "Hex": "#8B8680",
        "R": 139,
        "G": 134,
        "B": 128
    },
    {
        "Name": "Pewter Blue",
        "Hex": "#8BA8B7",
        "R": 139,
        "G": 168,
        "B": 183
    },
    {
        "Name": "Cool grey",
        "Hex": "#8C92AC",
        "R": 140,
        "G": 146,
        "B": 172
    },
    {
        "Name": "Dark sky blue",
        "Hex": "#8CBED6",
        "R": 140,
        "G": 190,
        "B": 214
    },
    {
        "Name": "Razzmic Berry",
        "Hex": "#8D4E85",
        "R": 141,
        "G": 78,
        "B": 133
    },
    {
        "Name": "Morning blue",
        "Hex": "#8DA399",
        "R": 141,
        "G": 163,
        "B": 153
    },
    {
        "Name": "Middle blue green",
        "Hex": "#8DD9CC",
        "R": 141,
        "G": 217,
        "B": 204
    },
    {
        "Name": "Quinacridone magenta",
        "Hex": "#8E3A59",
        "R": 142,
        "G": 58,
        "B": 89
    },
    {
        "Name": "Plum",
        "Hex": "#8E4585",
        "R": 142,
        "G": 69,
        "B": 133
    },
    {
        "Name": "Electric violet",
        "Hex": "#8F00FF",
        "R": 143,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Dark sea green",
        "Hex": "#8FBC8F",
        "R": 143,
        "G": 188,
        "B": 143
    },
    {
        "Name": "Sheen green",
        "Hex": "#8FD400",
        "R": 143,
        "G": 212,
        "B": 0
    },
    {
        "Name": "Rose taupe",
        "Hex": "#905D5D",
        "R": 144,
        "G": 93,
        "B": 93
    },
    {
        "Name": "Light green",
        "Hex": "#90EE90",
        "R": 144,
        "G": 238,
        "B": 144
    },
    {
        "Name": "Red ochre",
        "Hex": "#913831",
        "R": 145,
        "G": 56,
        "B": 49
    },
    {
        "Name": "Sugar Plum",
        "Hex": "#914E75",
        "R": 145,
        "G": 78,
        "B": 117
    },
    {
        "Name": "Antique fuchsia",
        "Hex": "#915C83",
        "R": 145,
        "G": 92,
        "B": 131
    },
    {
        "Name": "Mauve taupe",
        "Hex": "#915F6D",
        "R": 145,
        "G": 95,
        "B": 109
    },
    {
        "Name": "Cadet grey",
        "Hex": "#91A3B0",
        "R": 145,
        "G": 163,
        "B": 176
    },
    {
        "Name": "Zeal",
        "Hex": "#91E0B7",
        "R": 145,
        "G": 224,
        "B": 183
    },
    {
        "Name": "Red-violet (Color wheel)",
        "Hex": "#922B3E",
        "R": 146,
        "G": 43,
        "B": 62
    },
    {
        "Name": "Medium purple",
        "Hex": "#9370DB",
        "R": 147,
        "G": 112,
        "B": 219
    },
    {
        "Name": "Pistachio",
        "Hex": "#93C572",
        "R": 147,
        "G": 197,
        "B": 114
    },
    {
        "Name": "Light cornflower blue",
        "Hex": "#93CCEA",
        "R": 147,
        "G": 204,
        "B": 234
    },
    {
        "Name": "Dark violet",
        "Hex": "#9400D3",
        "R": 148,
        "G": 0,
        "B": 211
    },
    {
        "Name": "Chestnut",
        "Hex": "#954535",
        "R": 149,
        "G": 69,
        "B": 53
    },
    {
        "Name": "Carmine",
        "Hex": "#960018",
        "R": 150,
        "G": 0,
        "B": 24
    },
    {
        "Name": "Violet (crayola)",
        "Hex": "#963D7F",
        "R": 150,
        "G": 61,
        "B": 127
    },
    {
        "Name": "Brown",
        "Hex": "#964B00",
        "R": 150,
        "G": 75,
        "B": 0
    },
    {
        "Name": "Sand dune",
        "Hex": "#967117",
        "R": 150,
        "G": 113,
        "B": 23
    },
    {
        "Name": "Purple mountain majesty",
        "Hex": "#9678B6",
        "R": 150,
        "G": 120,
        "B": 182
    },
    {
        "Name": "Eton blue",
        "Hex": "#96C8A2",
        "R": 150,
        "G": 200,
        "B": 162
    },
    {
        "Name": "Manatee",
        "Hex": "#979AAA",
        "R": 151,
        "G": 154,
        "B": 170
    },
    {
        "Name": "Liver chestnut",
        "Hex": "#987456",
        "R": 152,
        "G": 116,
        "B": 86
    },
    {
        "Name": "Cinereous",
        "Hex": "#98817B",
        "R": 152,
        "G": 129,
        "B": 123
    },
    {
        "Name": "Spanish gray",
        "Hex": "#989898",
        "R": 152,
        "G": 152,
        "B": 152
    },
    {
        "Name": "Mint green",
        "Hex": "#98FF98",
        "R": 152,
        "G": 255,
        "B": 152
    },
    {
        "Name": "Dark orchid",
        "Hex": "#9932CC",
        "R": 153,
        "G": 50,
        "B": 204
    },
    {
        "Name": "Golden brown",
        "Hex": "#996515",
        "R": 153,
        "G": 101,
        "B": 21
    },
    {
        "Name": "Copper rose",
        "Hex": "#996666",
        "R": 153,
        "G": 102,
        "B": 102
    },
    {
        "Name": "Amethyst",
        "Hex": "#9966CC",
        "R": 153,
        "G": 102,
        "B": 204
    },
    {
        "Name": "Mountbatten pink",
        "Hex": "#997A8D",
        "R": 153,
        "G": 122,
        "B": 141
    },
    {
        "Name": "Olivine",
        "Hex": "#9AB973",
        "R": 154,
        "G": 185,
        "B": 115
    },
    {
        "Name": "Yellow-green",
        "Hex": "#9ACD32",
        "R": 154,
        "G": 205,
        "B": 50
    },
    {
        "Name": "Ruby red",
        "Hex": "#9B111E",
        "R": 155,
        "G": 17,
        "B": 30
    },
    {
        "Name": "Pale cerulean",
        "Hex": "#9BC4E2",
        "R": 155,
        "G": 196,
        "B": 226
    },
    {
        "Name": "Big dip o’ruby",
        "Hex": "#9C2542",
        "R": 156,
        "G": 37,
        "B": 66
    },
    {
        "Name": "Purple Plum",
        "Hex": "#9C51B6",
        "R": 156,
        "G": 81,
        "B": 182
    },
    {
        "Name": "Metallic Sunburst",
        "Hex": "#9C7C38",
        "R": 156,
        "G": 124,
        "B": 56
    },
    {
        "Name": "Japanese carmine",
        "Hex": "#9D2933",
        "R": 157,
        "G": 41,
        "B": 51
    },
    {
        "Name": "Crimson (UA)",
        "Hex": "#9E1B32",
        "R": 158,
        "G": 27,
        "B": 50
    },
    {
        "Name": "Rose Dust",
        "Hex": "#9E5E6F",
        "R": 158,
        "G": 94,
        "B": 111
    },
    {
        "Name": "French lime",
        "Hex": "#9EFD38",
        "R": 158,
        "G": 253,
        "B": 56
    },
    {
        "Name": "Purple (Munsell)",
        "Hex": "#9F00C5",
        "R": 159,
        "G": 0,
        "B": 197
    },
    {
        "Name": "Vivid violet",
        "Hex": "#9F00FF",
        "R": 159,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Vivid burgundy",
        "Hex": "#9F1D35",
        "R": 159,
        "G": 29,
        "B": 53
    },
    {
        "Name": "Amaranth deep purple",
        "Hex": "#9F2B68",
        "R": 159,
        "G": 43,
        "B": 104
    },
    {
        "Name": "Magenta haze",
        "Hex": "#9F4576",
        "R": 159,
        "G": 69,
        "B": 118
    },
    {
        "Name": "Beaver",
        "Hex": "#9F8170",
        "R": 159,
        "G": 129,
        "B": 112
    },
    {
        "Name": "Citron",
        "Hex": "#9FA91F",
        "R": 159,
        "G": 169,
        "B": 31
    },
    {
        "Name": "Veronica",
        "Hex": "#A020F0",
        "R": 160,
        "G": 32,
        "B": 240
    },
    {
        "Name": "Turquoise green",
        "Hex": "#A0D6B4",
        "R": 160,
        "G": 214,
        "B": 180
    },
    {
        "Name": "Burnished brown",
        "Hex": "#A17A74",
        "R": 161,
        "G": 122,
        "B": 116
    },
    {
        "Name": "Baby blue eyes",
        "Hex": "#A1CAF1",
        "R": 161,
        "G": 202,
        "B": 241
    },
    {
        "Name": "Flirt",
        "Hex": "#A2006D",
        "R": 162,
        "G": 0,
        "B": 109
    },
    {
        "Name": "Blue bell",
        "Hex": "#A2A2D0",
        "R": 162,
        "G": 162,
        "B": 208
    },
    {
        "Name": "Wild blue yonder",
        "Hex": "#A2ADD0",
        "R": 162,
        "G": 173,
        "B": 208
    },
    {
        "Name": "Cambridge blue",
        "Hex": "#A3C1AD",
        "R": 163,
        "G": 193,
        "B": 173
    },
    {
        "Name": "Redwood",
        "Hex": "#A45A52",
        "R": 164,
        "G": 90,
        "B": 82
    },
    {
        "Name": "Non-photo blue",
        "Hex": "#A4DDED",
        "R": 164,
        "G": 221,
        "B": 237
    },
    {
        "Name": "University of Pennsylvania red",
        "Hex": "#A50021",
        "R": 165,
        "G": 0,
        "B": 33
    },
    {
        "Name": "Jazzberry jam",
        "Hex": "#A50B5E",
        "R": 165,
        "G": 11,
        "B": 94
    },
    {
        "Name": "Middle red purple",
        "Hex": "#A55353",
        "R": 165,
        "G": 83,
        "B": 83
    },
    {
        "Name": "Blast-off bronze",
        "Hex": "#A57164",
        "R": 165,
        "G": 113,
        "B": 100
    },
    {
        "Name": "Maximum red purple",
        "Hex": "#A63A79",
        "R": 166,
        "G": 58,
        "B": 121
    },
    {
        "Name": "Café au lait",
        "Hex": "#A67B5B",
        "R": 166,
        "G": 123,
        "B": 91
    },
    {
        "Name": "Quick Silver",
        "Hex": "#A6A6A6",
        "R": 166,
        "G": 166,
        "B": 166
    },
    {
        "Name": "Windsor tan",
        "Hex": "#A75502",
        "R": 167,
        "G": 85,
        "B": 2
    },
    {
        "Name": "Green Lizard",
        "Hex": "#A7F432",
        "R": 167,
        "G": 244,
        "B": 50
    },
    {
        "Name": "Spring bud",
        "Hex": "#A7FC00",
        "R": 167,
        "G": 252,
        "B": 0
    },
    {
        "Name": "Rufous",
        "Hex": "#A81C07",
        "R": 168,
        "G": 28,
        "B": 7
    },
    {
        "Name": "Sweet Brown",
        "Hex": "#A83731",
        "R": 168,
        "G": 55,
        "B": 49
    },
    {
        "Name": "Opal",
        "Hex": "#A8C3BC",
        "R": 168,
        "G": 195,
        "B": 188
    },
    {
        "Name": "Granny Smith apple",
        "Hex": "#A8E4A0",
        "R": 168,
        "G": 228,
        "B": 160
    },
    {
        "Name": "Rojo Spanish red",
        "Hex": "#A91101",
        "R": 169,
        "G": 17,
        "B": 1
    },
    {
        "Name": "Laurel green",
        "Hex": "#A9BA9D",
        "R": 169,
        "G": 186,
        "B": 157
    },
    {
        "Name": "Chinese red",
        "Hex": "#AA381E",
        "R": 170,
        "G": 56,
        "B": 30
    },
    {
        "Name": "Heliotrope gray",
        "Hex": "#AA98A9",
        "R": 170,
        "G": 152,
        "B": 169
    },
    {
        "Name": "Silver (Metallic)",
        "Hex": "#AAA9AD",
        "R": 170,
        "G": 169,
        "B": 173
    },
    {
        "Name": "Magic mint",
        "Hex": "#AAF0D1",
        "R": 170,
        "G": 240,
        "B": 209
    },
    {
        "Name": "Amaranth purple",
        "Hex": "#AB274F",
        "R": 171,
        "G": 39,
        "B": 79
    },
    {
        "Name": "English red",
        "Hex": "#AB4B52",
        "R": 171,
        "G": 75,
        "B": 82
    },
    {
        "Name": "Rose vale",
        "Hex": "#AB4E52",
        "R": 171,
        "G": 78,
        "B": 82
    },
    {
        "Name": "Glossy grape",
        "Hex": "#AB92B3",
        "R": 171,
        "G": 146,
        "B": 179
    },
    {
        "Name": "Silver chalice",
        "Hex": "#ACACAC",
        "R": 172,
        "G": 172,
        "B": 172
    },
    {
        "Name": "Maximum blue purple",
        "Hex": "#ACACE6",
        "R": 172,
        "G": 172,
        "B": 230
    },
    {
        "Name": "Middle green yellow",
        "Hex": "#ACBF60",
        "R": 172,
        "G": 191,
        "B": 96
    },
    {
        "Name": "Celadon",
        "Hex": "#ACE1AF",
        "R": 172,
        "G": 225,
        "B": 175
    },
    {
        "Name": "Blizzard blue",
        "Hex": "#ACE5EE",
        "R": 172,
        "G": 229,
        "B": 238
    },
    {
        "Name": "Mystic maroon",
        "Hex": "#AD4379",
        "R": 173,
        "G": 67,
        "B": 121
    },
    {
        "Name": "Copper penny",
        "Hex": "#AD6F69",
        "R": 173,
        "G": 111,
        "B": 105
    },
    {
        "Name": "Light blue",
        "Hex": "#ADD8E6",
        "R": 173,
        "G": 216,
        "B": 230
    },
    {
        "Name": "Upsdell red",
        "Hex": "#AE2029",
        "R": 174,
        "G": 32,
        "B": 41
    },
    {
        "Name": "Lilac Luster",
        "Hex": "#AE98AA",
        "R": 174,
        "G": 152,
        "B": 170
    },
    {
        "Name": "Medium carmine",
        "Hex": "#AF4035",
        "R": 175,
        "G": 64,
        "B": 53
    },
    {
        "Name": "Brown sugar",
        "Hex": "#AF6E4D",
        "R": 175,
        "G": 110,
        "B": 77
    },
    {
        "Name": "Uranian blue",
        "Hex": "#AFDBF5",
        "R": 175,
        "G": 219,
        "B": 245
    },
    {
        "Name": "Maroon (X11)",
        "Hex": "#B03060",
        "R": 176,
        "G": 48,
        "B": 96
    },
    {
        "Name": "Acid green",
        "Hex": "#B0BF1A",
        "R": 176,
        "G": 191,
        "B": 26
    },
    {
        "Name": "Light steel blue",
        "Hex": "#B0C4DE",
        "R": 176,
        "G": 196,
        "B": 222
    },
    {
        "Name": "Powder blue",
        "Hex": "#B0E0E6",
        "R": 176,
        "G": 224,
        "B": 230
    },
    {
        "Name": "Wine Red",
        "Hex": "#B11226",
        "R": 177,
        "G": 18,
        "B": 38
    },
    {
        "Name": "Firebrick",
        "Hex": "#B22222",
        "R": 178,
        "G": 34,
        "B": 34
    },
    {
        "Name": "African violet",
        "Hex": "#B284BE",
        "R": 178,
        "G": 132,
        "B": 190
    },
    {
        "Name": "Ash gray",
        "Hex": "#B2BEB5",
        "R": 178,
        "G": 190,
        "B": 181
    },
    {
        "Name": "Inchworm",
        "Hex": "#B2EC5D",
        "R": 178,
        "G": 236,
        "B": 93
    },
    {
        "Name": "Celeste",
        "Hex": "#B2FFFF",
        "R": 178,
        "G": 255,
        "B": 255
    },
    {
        "Name": "Carnelian",
        "Hex": "#B31B1B",
        "R": 179,
        "G": 27,
        "B": 27
    },
    {
        "Name": "Raspberry rose",
        "Hex": "#B3446C",
        "R": 179,
        "G": 68,
        "B": 108
    },
    {
        "Name": "English lavender",
        "Hex": "#B48395",
        "R": 180,
        "G": 131,
        "B": 149
    },
    {
        "Name": "Fandango",
        "Hex": "#B53389",
        "R": 181,
        "G": 51,
        "B": 137
    },
    {
        "Name": "Lavender (floral)",
        "Hex": "#B57EDC",
        "R": 181,
        "G": 126,
        "B": 220
    },
    {
        "Name": "Olive green",
        "Hex": "#B5B35C",
        "R": 181,
        "G": 179,
        "B": 92
    },
    {
        "Name": "Rust",
        "Hex": "#B7410E",
        "R": 183,
        "G": 65,
        "B": 14
    },
    {
        "Name": "Pearly purple",
        "Hex": "#B768A2",
        "R": 183,
        "G": 104,
        "B": 162
    },
    {
        "Name": "Opera mauve",
        "Hex": "#B784A7",
        "R": 183,
        "G": 132,
        "B": 167
    },
    {
        "Name": "Liver (dogs)",
        "Hex": "#B86D29",
        "R": 184,
        "G": 109,
        "B": 41
    },
    {
        "Name": "Copper",
        "Hex": "#B87333",
        "R": 184,
        "G": 115,
        "B": 51
    },
    {
        "Name": "Dark goldenrod",
        "Hex": "#B8860B",
        "R": 184,
        "G": 134,
        "B": 11
    },
    {
        "Name": "Deep chestnut",
        "Hex": "#B94E48",
        "R": 185,
        "G": 78,
        "B": 72
    },
    {
        "Name": "Columbia Blue",
        "Hex": "#B9D9EB",
        "R": 185,
        "G": 217,
        "B": 235
    },
    {
        "Name": "International orange (engineering)",
        "Hex": "#BA160C",
        "R": 186,
        "G": 22,
        "B": 12
    },
    {
        "Name": "Medium orchid",
        "Hex": "#BA55D3",
        "R": 186,
        "G": 85,
        "B": 211
    },
    {
        "Name": "Misty moss",
        "Hex": "#BBB477",
        "R": 187,
        "G": 180,
        "B": 119
    },
    {
        "Name": "Rosy brown",
        "Hex": "#BC8F8F",
        "R": 188,
        "G": 143,
        "B": 143
    },
    {
        "Name": "Sage",
        "Hex": "#BCB88A",
        "R": 188,
        "G": 184,
        "B": 138
    },
    {
        "Name": "Beau blue",
        "Hex": "#BCD4E6",
        "R": 188,
        "G": 212,
        "B": 230
    },
    {
        "Name": "Byzantine",
        "Hex": "#BD33A4",
        "R": 189,
        "G": 51,
        "B": 164
    },
    {
        "Name": "Dark khaki",
        "Hex": "#BDB76B",
        "R": 189,
        "G": 183,
        "B": 107
    },
    {
        "Name": "June bud",
        "Hex": "#BDDA57",
        "R": 189,
        "G": 218,
        "B": 87
    },
    {
        "Name": "Popstar",
        "Hex": "#BE4F62",
        "R": 190,
        "G": 79,
        "B": 98
    },
    {
        "Name": "Gray (X11 gray)",
        "Hex": "#BEBEBE",
        "R": 190,
        "G": 190,
        "B": 190
    },
    {
        "Name": "Pale aqua",
        "Hex": "#BED3E5",
        "R": 190,
        "G": 211,
        "B": 229
    },
    {
        "Name": "Electric purple",
        "Hex": "#BF00FF",
        "R": 191,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Black Shadows",
        "Hex": "#BFAFB2",
        "R": 191,
        "G": 175,
        "B": 178
    },
    {
        "Name": "Silver sand",
        "Hex": "#BFC1C2",
        "R": 191,
        "G": 193,
        "B": 194
    },
    {
        "Name": "Lime (color wheel)",
        "Hex": "#BFFF00",
        "R": 191,
        "G": 255,
        "B": 0
    },
    {
        "Name": "International orange (Golden Gate Bridge)",
        "Hex": "#C0362C",
        "R": 192,
        "G": 54,
        "B": 44
    },
    {
        "Name": "Mahogany",
        "Hex": "#C04000",
        "R": 192,
        "G": 64,
        "B": 0
    },
    {
        "Name": "Red-violet (Crayola)",
        "Hex": "#C0448F",
        "R": 192,
        "G": 68,
        "B": 143
    },
    {
        "Name": "Old rose",
        "Hex": "#C08081",
        "R": 192,
        "G": 128,
        "B": 129
    },
    {
        "Name": "Tuscany",
        "Hex": "#C09999",
        "R": 192,
        "G": 153,
        "B": 153
    },
    {
        "Name": "Silver",
        "Hex": "#C0C0C0",
        "R": 192,
        "G": 192,
        "B": 192
    },
    {
        "Name": "Fuchsia (Crayola)",
        "Hex": "#C154C1",
        "R": 193,
        "G": 84,
        "B": 193
    },
    {
        "Name": "Camel",
        "Hex": "#C19A6B",
        "R": 193,
        "G": 154,
        "B": 107
    },
    {
        "Name": "Rose red",
        "Hex": "#C21E56",
        "R": 194,
        "G": 30,
        "B": 86
    },
    {
        "Name": "Sand / Ecru",
        "Hex": "#C2B280",
        "R": 194,
        "G": 178,
        "B": 128
    },
    {
        "Name": "Pictorial carmine",
        "Hex": "#C30B4E",
        "R": 195,
        "G": 11,
        "B": 78
    },
    {
        "Name": "Maroon (Crayola)",
        "Hex": "#C32148",
        "R": 195,
        "G": 33,
        "B": 72
    },
    {
        "Name": "Khaki (web)",
        "Hex": "#C3B091",
        "R": 195,
        "G": 176,
        "B": 145
    },
    {
        "Name": "Periwinkle (Crayola)",
        "Hex": "#C3CDE6",
        "R": 195,
        "G": 205,
        "B": 230
    },
    {
        "Name": "Red (NCS)",
        "Hex": "#C40233",
        "R": 196,
        "G": 2,
        "B": 51
    },
    {
        "Name": "Cardinal",
        "Hex": "#C41E3A",
        "R": 196,
        "G": 30,
        "B": 58
    },
    {
        "Name": "Alloy orange",
        "Hex": "#C46210",
        "R": 196,
        "G": 98,
        "B": 16
    },
    {
        "Name": "Silver pink",
        "Hex": "#C4AEAD",
        "R": 196,
        "G": 174,
        "B": 173
    },
    {
        "Name": "Lavender gray",
        "Hex": "#C4C3D0",
        "R": 196,
        "G": 195,
        "B": 208
    },
    {
        "Name": "Mulberry",
        "Hex": "#C54B8C",
        "R": 197,
        "G": 75,
        "B": 140
    },
    {
        "Name": "Vegas gold",
        "Hex": "#C5B358",
        "R": 197,
        "G": 179,
        "B": 88
    },
    {
        "Name": "Light periwinkle",
        "Hex": "#C5CBE1",
        "R": 197,
        "G": 203,
        "B": 225
    },
    {
        "Name": "Yellow-green (Crayola)",
        "Hex": "#C5E384",
        "R": 197,
        "G": 227,
        "B": 132
    },
    {
        "Name": "Red-violet",
        "Hex": "#C71585",
        "R": 199,
        "G": 21,
        "B": 133
    },
    {
        "Name": "French raspberry",
        "Hex": "#C72C48",
        "R": 199,
        "G": 44,
        "B": 72
    },
    {
        "Name": "Venetian red",
        "Hex": "#C80815",
        "R": 200,
        "G": 8,
        "B": 21
    },
    {
        "Name": "Smitten",
        "Hex": "#C84186",
        "R": 200,
        "G": 65,
        "B": 134
    },
    {
        "Name": "Mulberry (Crayola)",
        "Hex": "#C8509B",
        "R": 200,
        "G": 80,
        "B": 155
    },
    {
        "Name": "Antique brass",
        "Hex": "#C88A65",
        "R": 200,
        "G": 138,
        "B": 101
    },
    {
        "Name": "Lilac",
        "Hex": "#C8A2C8",
        "R": 200,
        "G": 162,
        "B": 200
    },
    {
        "Name": "Light French beige",
        "Hex": "#C8AD7F",
        "R": 200,
        "G": 173,
        "B": 127
    },
    {
        "Name": "Cedar Chest",
        "Hex": "#C95A49",
        "R": 201,
        "G": 90,
        "B": 73
    },
    {
        "Name": "Wisteria",
        "Hex": "#C9A0DC",
        "R": 201,
        "G": 160,
        "B": 220
    },
    {
        "Name": "Silver (Crayola)",
        "Hex": "#C9C0BB",
        "R": 201,
        "G": 192,
        "B": 187
    },
    {
        "Name": "Magenta (dye)",
        "Hex": "#CA1F7B",
        "R": 202,
        "G": 31,
        "B": 123
    },
    {
        "Name": "Bitter lemon",
        "Hex": "#CAE00D",
        "R": 202,
        "G": 224,
        "B": 13
    },
    {
        "Name": "Sinopia",
        "Hex": "#CB410B",
        "R": 203,
        "G": 65,
        "B": 11
    },
    {
        "Name": "Brick red",
        "Hex": "#CB4154",
        "R": 203,
        "G": 65,
        "B": 84
    },
    {
        "Name": "Copper red",
        "Hex": "#CB6D51",
        "R": 203,
        "G": 109,
        "B": 81
    },
    {
        "Name": "Satin sheen gold",
        "Hex": "#CBA135",
        "R": 203,
        "G": 161,
        "B": 53
    },
    {
        "Name": "Persian red",
        "Hex": "#CC3333",
        "R": 204,
        "G": 51,
        "B": 51
    },
    {
        "Name": "Madder Lake",
        "Hex": "#CC3336",
        "R": 204,
        "G": 51,
        "B": 54
    },
    {
        "Name": "Steel pink",
        "Hex": "#CC33CC",
        "R": 204,
        "G": 51,
        "B": 204
    },
    {
        "Name": "English vermillion",
        "Hex": "#CC474B",
        "R": 204,
        "G": 71,
        "B": 75
    },
    {
        "Name": "Burnt orange",
        "Hex": "#CC5500",
        "R": 204,
        "G": 85,
        "B": 0
    },
    {
        "Name": "Ocher (Ochre)",
        "Hex": "#CC7722",
        "R": 204,
        "G": 119,
        "B": 34
    },
    {
        "Name": "Puce",
        "Hex": "#CC8899",
        "R": 204,
        "G": 136,
        "B": 153
    },
    {
        "Name": "Lemon curry",
        "Hex": "#CCA01D",
        "R": 204,
        "G": 160,
        "B": 29
    },
    {
        "Name": "Lavender blue / Periwinkle",
        "Hex": "#CCCCFF",
        "R": 204,
        "G": 204,
        "B": 255
    },
    {
        "Name": "Electric lime",
        "Hex": "#CCFF00",
        "R": 204,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Tenné (tawny)",
        "Hex": "#CD5700",
        "R": 205,
        "G": 87,
        "B": 0
    },
    {
        "Name": "Indian red",
        "Hex": "#CD5C5C",
        "R": 205,
        "G": 92,
        "B": 92
    },
    {
        "Name": "Cinnamon Satin",
        "Hex": "#CD607E",
        "R": 205,
        "G": 96,
        "B": 126
    },
    {
        "Name": "Bronze",
        "Hex": "#CD7F32",
        "R": 205,
        "G": 127,
        "B": 50
    },
    {
        "Name": "Fire engine red",
        "Hex": "#CE2029",
        "R": 206,
        "G": 32,
        "B": 41
    },
    {
        "Name": "Ruber",
        "Hex": "#CE4676",
        "R": 206,
        "G": 70,
        "B": 118
    },
    {
        "Name": "Volt",
        "Hex": "#CEFF00",
        "R": 206,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Lava",
        "Hex": "#CF1020",
        "R": 207,
        "G": 16,
        "B": 32
    },
    {
        "Name": "Telemagenta",
        "Hex": "#CF3476",
        "R": 207,
        "G": 52,
        "B": 118
    },
    {
        "Name": "Super pink",
        "Hex": "#CF6BA9",
        "R": 207,
        "G": 107,
        "B": 169
    },
    {
        "Name": "Sky magenta",
        "Hex": "#CF71AF",
        "R": 207,
        "G": 113,
        "B": 175
    },
    {
        "Name": "Old gold",
        "Hex": "#CFB53B",
        "R": 207,
        "G": 181,
        "B": 59
    },
    {
        "Name": "Magenta (Pantone)",
        "Hex": "#D0417E",
        "R": 208,
        "G": 65,
        "B": 126
    },
    {
        "Name": "Tea green",
        "Hex": "#D0F0C0",
        "R": 208,
        "G": 240,
        "B": 192
    },
    {
        "Name": "Arctic lime",
        "Hex": "#D0FF14",
        "R": 208,
        "G": 255,
        "B": 20
    },
    {
        "Name": "Spanish carmine",
        "Hex": "#D10047",
        "R": 209,
        "G": 0,
        "B": 71
    },
    {
        "Name": "Rubine red",
        "Hex": "#D10056",
        "R": 209,
        "G": 0,
        "B": 86
    },
    {
        "Name": "Pear",
        "Hex": "#D1E231",
        "R": 209,
        "G": 226,
        "B": 49
    },
    {
        "Name": "Chocolate (web)",
        "Hex": "#D2691E",
        "R": 210,
        "G": 105,
        "B": 30
    },
    {
        "Name": "Tan",
        "Hex": "#D2B48C",
        "R": 210,
        "G": 180,
        "B": 140
    },
    {
        "Name": "Metallic gold",
        "Hex": "#D3AF37",
        "R": 211,
        "G": 175,
        "B": 55
    },
    {
        "Name": "Light gray",
        "Hex": "#D3D3D3",
        "R": 211,
        "G": 211,
        "B": 211
    },
    {
        "Name": "Rosso corsa",
        "Hex": "#D40000",
        "R": 212,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Syracuse Orange",
        "Hex": "#D44500",
        "R": 212,
        "G": 69,
        "B": 0
    },
    {
        "Name": "Wild orchid",
        "Hex": "#D470A2",
        "R": 212,
        "G": 112,
        "B": 162
    },
    {
        "Name": "French mauve",
        "Hex": "#D473D4",
        "R": 212,
        "G": 115,
        "B": 212
    },
    {
        "Name": "Gold (metallic)",
        "Hex": "#D4AF37",
        "R": 212,
        "G": 175,
        "B": 55
    },
    {
        "Name": "Mystic",
        "Hex": "#D65282",
        "R": 214,
        "G": 82,
        "B": 130
    },
    {
        "Name": "Raw sienna",
        "Hex": "#D68A59",
        "R": 214,
        "G": 138,
        "B": 89
    },
    {
        "Name": "Languid lavender",
        "Hex": "#D6CADD",
        "R": 214,
        "G": 202,
        "B": 221
    },
    {
        "Name": "Carmine (M&P)",
        "Hex": "#D70040",
        "R": 215,
        "G": 0,
        "B": 64
    },
    {
        "Name": "Pink (Pantone)",
        "Hex": "#D74894",
        "R": 215,
        "G": 72,
        "B": 148
    },
    {
        "Name": "New York pink",
        "Hex": "#D7837F",
        "R": 215,
        "G": 131,
        "B": 127
    },
    {
        "Name": "Bright lilac",
        "Hex": "#D891EF",
        "R": 216,
        "G": 145,
        "B": 239
    },
    {
        "Name": "Pink lavender",
        "Hex": "#D8B2D1",
        "R": 216,
        "G": 178,
        "B": 209
    },
    {
        "Name": "Thistle / Light purple",
        "Hex": "#D8BFD8",
        "R": 216,
        "G": 191,
        "B": 216
    },
    {
        "Name": "UA red",
        "Hex": "#D9004C",
        "R": 217,
        "G": 0,
        "B": 76
    },
    {
        "Name": "Maximum red",
        "Hex": "#D92121",
        "R": 217,
        "G": 33,
        "B": 33
    },
    {
        "Name": "Vermilion",
        "Hex": "#D9381E",
        "R": 217,
        "G": 56,
        "B": 30
    },
    {
        "Name": "Middle purple",
        "Hex": "#D982B5",
        "R": 217,
        "G": 130,
        "B": 181
    },
    {
        "Name": "Shimmering Blush",
        "Hex": "#D98695",
        "R": 217,
        "G": 134,
        "B": 149
    },
    {
        "Name": "Persian orange",
        "Hex": "#D99058",
        "R": 217,
        "G": 144,
        "B": 88
    },
    {
        "Name": "Tan (Crayola)",
        "Hex": "#D99A6C",
        "R": 217,
        "G": 154,
        "B": 108
    },
    {
        "Name": "Maximum green yellow",
        "Hex": "#D9E650",
        "R": 217,
        "G": 230,
        "B": 80
    },
    {
        "Name": "Barbie Pink",
        "Hex": "#DA1884",
        "R": 218,
        "G": 24,
        "B": 132
    },
    {
        "Name": "Rusty red",
        "Hex": "#DA2C43",
        "R": 218,
        "G": 44,
        "B": 67
    },
    {
        "Name": "Deep cerise",
        "Hex": "#DA3287",
        "R": 218,
        "G": 50,
        "B": 135
    },
    {
        "Name": "Orchid",
        "Hex": "#DA70D6",
        "R": 218,
        "G": 112,
        "B": 214
    },
    {
        "Name": "Copper (Crayola)",
        "Hex": "#DA8A67",
        "R": 218,
        "G": 138,
        "B": 103
    },
    {
        "Name": "Harvest gold",
        "Hex": "#DA9100",
        "R": 218,
        "G": 145,
        "B": 0
    },
    {
        "Name": "Goldenrod",
        "Hex": "#DAA520",
        "R": 218,
        "G": 165,
        "B": 32
    },
    {
        "Name": "Alizarin",
        "Hex": "#DB2D43",
        "R": 219,
        "G": 45,
        "B": 67
    },
    {
        "Name": "Timberwolf",
        "Hex": "#DBD7D2",
        "R": 219,
        "G": 215,
        "B": 210
    },
    {
        "Name": "Crimson",
        "Hex": "#DC143C",
        "R": 220,
        "G": 20,
        "B": 60
    },
    {
        "Name": "Gainsboro",
        "Hex": "#DCDCDC",
        "R": 220,
        "G": 220,
        "B": 220
    },
    {
        "Name": "Plum (web)",
        "Hex": "#DDA0DD",
        "R": 221,
        "G": 160,
        "B": 221
    },
    {
        "Name": "Cerise",
        "Hex": "#DE3163",
        "R": 222,
        "G": 49,
        "B": 99
    },
    {
        "Name": "Fandango pink",
        "Hex": "#DE5285",
        "R": 222,
        "G": 82,
        "B": 133
    },
    {
        "Name": "Blush",
        "Hex": "#DE5D83",
        "R": 222,
        "G": 93,
        "B": 131
    },
    {
        "Name": "China pink",
        "Hex": "#DE6FA1",
        "R": 222,
        "G": 111,
        "B": 161
    },
    {
        "Name": "Pastel pink",
        "Hex": "#DEA5A4",
        "R": 222,
        "G": 165,
        "B": 164
    },
    {
        "Name": "Tumbleweed",
        "Hex": "#DEAA88",
        "R": 222,
        "G": 170,
        "B": 136
    },
    {
        "Name": "Burlywood",
        "Hex": "#DEB887",
        "R": 222,
        "G": 184,
        "B": 135
    },
    {
        "Name": "Lion",
        "Hex": "#DECC9C",
        "R": 222,
        "G": 204,
        "B": 156
    },
    {
        "Name": "Psychedelic purple / Phlox",
        "Hex": "#DF00FF",
        "R": 223,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Heliotrope",
        "Hex": "#DF73FF",
        "R": 223,
        "G": 115,
        "B": 255
    },
    {
        "Name": "Ruby",
        "Hex": "#E0115F",
        "R": 224,
        "G": 17,
        "B": 95
    },
    {
        "Name": "Mauve",
        "Hex": "#E0B0FF",
        "R": 224,
        "G": 176,
        "B": 255
    },
    {
        "Name": "Light cyan",
        "Hex": "#E0FFFF",
        "R": 224,
        "G": 255,
        "B": 255
    },
    {
        "Name": "Permanent Geranium Lake",
        "Hex": "#E12C2C",
        "R": 225,
        "G": 44,
        "B": 44
    },
    {
        "Name": "Prairie gold",
        "Hex": "#E1CA7A",
        "R": 225,
        "G": 202,
        "B": 122
    },
    {
        "Name": "Medium candy apple red",
        "Hex": "#E2062C",
        "R": 226,
        "G": 6,
        "B": 44
    },
    {
        "Name": "Chili red",
        "Hex": "#E23D28",
        "R": 226,
        "G": 61,
        "B": 40
    },
    {
        "Name": "Flame",
        "Hex": "#E25822",
        "R": 226,
        "G": 88,
        "B": 34
    },
    {
        "Name": "Terra cotta",
        "Hex": "#E2725B",
        "R": 226,
        "G": 114,
        "B": 91
    },
    {
        "Name": "Orchid (Crayola)",
        "Hex": "#E29CD2",
        "R": 226,
        "G": 156,
        "B": 210
    },
    {
        "Name": "Raspberry",
        "Hex": "#E30B5D",
        "R": 227,
        "G": 11,
        "B": 93
    },
    {
        "Name": "Razzmatazz",
        "Hex": "#E3256B",
        "R": 227,
        "G": 37,
        "B": 107
    },
    {
        "Name": "Rose madder",
        "Hex": "#E32636",
        "R": 227,
        "G": 38,
        "B": 54
    },
    {
        "Name": "Vermilion / Cinnabar",
        "Hex": "#E34234",
        "R": 227,
        "G": 66,
        "B": 52
    },
    {
        "Name": "Indian yellow",
        "Hex": "#E3A857",
        "R": 227,
        "G": 168,
        "B": 87
    },
    {
        "Name": "Sunray",
        "Hex": "#E3AB57",
        "R": 227,
        "G": 171,
        "B": 87
    },
    {
        "Name": "Bone",
        "Hex": "#E3DAC9",
        "R": 227,
        "G": 218,
        "B": 201
    },
    {
        "Name": "Mindaro",
        "Hex": "#E3F988",
        "R": 227,
        "G": 249,
        "B": 136
    },
    {
        "Name": "Red-purple",
        "Hex": "#E40078",
        "R": 228,
        "G": 0,
        "B": 120
    },
    {
        "Name": "Mexican pink",
        "Hex": "#E4007C",
        "R": 228,
        "G": 0,
        "B": 124
    },
    {
        "Name": "Tango / Candy pink",
        "Hex": "#E4717A",
        "R": 228,
        "G": 113,
        "B": 122
    },
    {
        "Name": "Fulvous",
        "Hex": "#E48400",
        "R": 228,
        "G": 132,
        "B": 0
    },
    {
        "Name": "Gamboge",
        "Hex": "#E49B0F",
        "R": 228,
        "G": 155,
        "B": 15
    },
    {
        "Name": "Citrine",
        "Hex": "#E4D00A",
        "R": 228,
        "G": 208,
        "B": 10
    },
    {
        "Name": "Straw",
        "Hex": "#E4D96F",
        "R": 228,
        "G": 217,
        "B": 111
    },
    {
        "Name": "Middle red",
        "Hex": "#E58E73",
        "R": 229,
        "G": 142,
        "B": 115
    },
    {
        "Name": "Fawn",
        "Hex": "#E5AA70",
        "R": 229,
        "G": 170,
        "B": 112
    },
    {
        "Name": "Platinum",
        "Hex": "#E5E4E2",
        "R": 229,
        "G": 228,
        "B": 226
    },
    {
        "Name": "Spanish red",
        "Hex": "#E60026",
        "R": 230,
        "G": 0,
        "B": 38
    },
    {
        "Name": "Paradise pink",
        "Hex": "#E63E62",
        "R": 230,
        "G": 62,
        "B": 98
    },
    {
        "Name": "Charm pink",
        "Hex": "#E68FAC",
        "R": 230,
        "G": 143,
        "B": 172
    },
    {
        "Name": "Gold (Crayola)",
        "Hex": "#E6BE8A",
        "R": 230,
        "G": 190,
        "B": 138
    },
    {
        "Name": "Lavender (web)",
        "Hex": "#E6E6FA",
        "R": 230,
        "G": 230,
        "B": 250
    },
    {
        "Name": "Kobi",
        "Hex": "#E79FC4",
        "R": 231,
        "G": 159,
        "B": 196
    },
    {
        "Name": "Spanish orange",
        "Hex": "#E86100",
        "R": 232,
        "G": 97,
        "B": 0
    },
    {
        "Name": "Queen pink",
        "Hex": "#E8CCD7",
        "R": 232,
        "G": 204,
        "B": 215
    },
    {
        "Name": "Key lime",
        "Hex": "#E8F48C",
        "R": 232,
        "G": 244,
        "B": 140
    },
    {
        "Name": "Frostbite",
        "Hex": "#E936A7",
        "R": 233,
        "G": 54,
        "B": 167
    },
    {
        "Name": "Burnt sienna",
        "Hex": "#E97451",
        "R": 233,
        "G": 116,
        "B": 81
    },
    {
        "Name": "Dark salmon",
        "Hex": "#E9967A",
        "R": 233,
        "G": 150,
        "B": 122
    },
    {
        "Name": "Arylide / Hansa yellow",
        "Hex": "#E9D66B",
        "R": 233,
        "G": 214,
        "B": 107
    },
    {
        "Name": "Nyanza",
        "Hex": "#E9FFDB",
        "R": 233,
        "G": 255,
        "B": 219
    },
    {
        "Name": "Marigold",
        "Hex": "#EAA221",
        "R": 234,
        "G": 162,
        "B": 33
    },
    {
        "Name": "Persimmon",
        "Hex": "#EC5800",
        "R": 236,
        "G": 88,
        "B": 0
    },
    {
        "Name": "Middle yellow red",
        "Hex": "#ECB176",
        "R": 236,
        "G": 177,
        "B": 118
    },
    {
        "Name": "Spring green (Crayola)",
        "Hex": "#ECEBBD",
        "R": 236,
        "G": 235,
        "B": 189
    },
    {
        "Name": "Red (pigment)",
        "Hex": "#ED1C24",
        "R": 237,
        "G": 28,
        "B": 36
    },
    {
        "Name": "Imperial red (Pantone)",
        "Hex": "#ED2939",
        "R": 237,
        "G": 41,
        "B": 57
    },
    {
        "Name": "Pale Dogwood / Rose Pompadour",
        "Hex": "#ED7A9B",
        "R": 237,
        "G": 122,
        "B": 155
    },
    {
        "Name": "Cadmium orange",
        "Hex": "#ED872D",
        "R": 237,
        "G": 135,
        "B": 45
    },
    {
        "Name": "Carrot orange",
        "Hex": "#ED9121",
        "R": 237,
        "G": 145,
        "B": 33
    },
    {
        "Name": "Desert sand",
        "Hex": "#EDC9AF",
        "R": 237,
        "G": 201,
        "B": 175
    },
    {
        "Name": "Red (Crayola)",
        "Hex": "#EE204D",
        "R": 238,
        "G": 32,
        "B": 77
    },
    {
        "Name": "Violet (web)",
        "Hex": "#EE82EE",
        "R": 238,
        "G": 130,
        "B": 238
    },
    {
        "Name": "Safety yellow",
        "Hex": "#EED202",
        "R": 238,
        "G": 210,
        "B": 2
    },
    {
        "Name": "Almond",
        "Hex": "#EED9C4",
        "R": 238,
        "G": 217,
        "B": 196
    },
    {
        "Name": "Flax",
        "Hex": "#EEDC82",
        "R": 238,
        "G": 220,
        "B": 130
    },
    {
        "Name": "Titanium yellow",
        "Hex": "#EEE600",
        "R": 238,
        "G": 230,
        "B": 0
    },
    {
        "Name": "Xanthic",
        "Hex": "#EEED09",
        "R": 238,
        "G": 237,
        "B": 9
    },
    {
        "Name": "Mauvelous",
        "Hex": "#EF98AA",
        "R": 239,
        "G": 152,
        "B": 170
    },
    {
        "Name": "Cameo pink",
        "Hex": "#EFBBCC",
        "R": 239,
        "G": 187,
        "B": 204
    },
    {
        "Name": "Yellow (Munsell)",
        "Hex": "#EFCC00",
        "R": 239,
        "G": 204,
        "B": 0
    },
    {
        "Name": "Dutch white",
        "Hex": "#EFDFBB",
        "R": 239,
        "G": 223,
        "B": 187
    },
    {
        "Name": "Violet-red(PerBang)",
        "Hex": "#F0599C",
        "R": 240,
        "G": 89,
        "B": 156
    },
    {
        "Name": "Light coral",
        "Hex": "#F08080",
        "R": 240,
        "G": 128,
        "B": 128
    },
    {
        "Name": "Khaki (X11) (Light khaki)",
        "Hex": "#F0E68C",
        "R": 240,
        "G": 230,
        "B": 140
    },
    {
        "Name": "Eggshell",
        "Hex": "#F0EAD6",
        "R": 240,
        "G": 234,
        "B": 214
    },
    {
        "Name": "Alice blue",
        "Hex": "#F0F8FF",
        "R": 240,
        "G": 248,
        "B": 255
    },
    {
        "Name": "Azure (X11/web color)",
        "Hex": "#F0FFFF",
        "R": 240,
        "G": 255,
        "B": 255
    },
    {
        "Name": "Amaranth pink",
        "Hex": "#F19CBB",
        "R": 241,
        "G": 156,
        "B": 187
    },
    {
        "Name": "Xanthous",
        "Hex": "#F1B42F",
        "R": 241,
        "G": 180,
        "B": 47
    },
    {
        "Name": "Champagne pink",
        "Hex": "#F1DDCF",
        "R": 241,
        "G": 221,
        "B": 207
    },
    {
        "Name": "Parchment",
        "Hex": "#F1E9D2",
        "R": 241,
        "G": 233,
        "B": 210
    },
    {
        "Name": "Red (Munsell)",
        "Hex": "#F2003C",
        "R": 242,
        "G": 0,
        "B": 60
    },
    {
        "Name": "Tangerine",
        "Hex": "#F28500",
        "R": 242,
        "G": 133,
        "B": 0
    },
    {
        "Name": "Maximum yellow red",
        "Hex": "#F2BA49",
        "R": 242,
        "G": 186,
        "B": 73
    },
    {
        "Name": "Orchid pink",
        "Hex": "#F2BDCD",
        "R": 242,
        "G": 189,
        "B": 205
    },
    {
        "Name": "Maize (Crayola)",
        "Hex": "#F2C649",
        "R": 242,
        "G": 198,
        "B": 73
    },
    {
        "Name": "Magnolia",
        "Hex": "#F2E8D7",
        "R": 242,
        "G": 232,
        "B": 215
    },
    {
        "Name": "Mandarin",
        "Hex": "#F37A48",
        "R": 243,
        "G": 122,
        "B": 72
    },
    {
        "Name": "Vanilla ice",
        "Hex": "#F38FA9",
        "R": 243,
        "G": 143,
        "B": 169
    },
    {
        "Name": "Vanilla",
        "Hex": "#F3E5AB",
        "R": 243,
        "G": 229,
        "B": 171
    },
    {
        "Name": "Hollywood cerise",
        "Hex": "#F400A1",
        "R": 244,
        "G": 0,
        "B": 161
    },
    {
        "Name": "Sandy brown",
        "Hex": "#F4A460",
        "R": 244,
        "G": 164,
        "B": 96
    },
    {
        "Name": "Tea rose",
        "Hex": "#F4C2C2",
        "R": 244,
        "G": 194,
        "B": 194
    },
    {
        "Name": "Saffron",
        "Hex": "#F4C430",
        "R": 244,
        "G": 196,
        "B": 48
    },
    {
        "Name": "Jonquil",
        "Hex": "#F4CA16",
        "R": 244,
        "G": 202,
        "B": 22
    },
    {
        "Name": "Isabelline",
        "Hex": "#F4F0EC",
        "R": 244,
        "G": 240,
        "B": 236
    },
    {
        "Name": "Cyclamen",
        "Hex": "#F56FA1",
        "R": 245,
        "G": 111,
        "B": 161
    },
    {
        "Name": "Princeton orange",
        "Hex": "#F58025",
        "R": 245,
        "G": 128,
        "B": 37
    },
    {
        "Name": "Orange-yellow",
        "Hex": "#F5BD1F",
        "R": 245,
        "G": 189,
        "B": 31
    },
    {
        "Name": "Wheat",
        "Hex": "#F5DEB3",
        "R": 245,
        "G": 222,
        "B": 179
    },
    {
        "Name": "Minion yellow",
        "Hex": "#F5E050",
        "R": 245,
        "G": 224,
        "B": 80
    },
    {
        "Name": "Beige",
        "Hex": "#F5F5DC",
        "R": 245,
        "G": 245,
        "B": 220
    },
    {
        "Name": "Zebra White",
        "Hex": "#F5F5F5",
        "R": 245,
        "G": 245,
        "B": 245
    },
    {
        "Name": "Mint cream",
        "Hex": "#F5FFFA",
        "R": 245,
        "G": 255,
        "B": 250
    },
    {
        "Name": "Magenta (Crayola)",
        "Hex": "#F653A6",
        "R": 246,
        "G": 83,
        "B": 166
    },
    {
        "Name": "Nadeshiko pink",
        "Hex": "#F6ADC6",
        "R": 246,
        "G": 173,
        "B": 198
    },
    {
        "Name": "Lemon meringue",
        "Hex": "#F6EABE",
        "R": 246,
        "G": 234,
        "B": 190
    },
    {
        "Name": "Violet-red",
        "Hex": "#F75394",
        "R": 247,
        "G": 83,
        "B": 148
    },
    {
        "Name": "Persian pink",
        "Hex": "#F77FBE",
        "R": 247,
        "G": 127,
        "B": 190
    },
    {
        "Name": "Pink Sherbet",
        "Hex": "#F78FA7",
        "R": 247,
        "G": 143,
        "B": 167
    },
    {
        "Name": "Spanish pink",
        "Hex": "#F7BFBE",
        "R": 247,
        "G": 191,
        "B": 190
    },
    {
        "Name": "Champagne",
        "Hex": "#F7E7CE",
        "R": 247,
        "G": 231,
        "B": 206
    },
    {
        "Name": "Coral pink",
        "Hex": "#F88379",
        "R": 248,
        "G": 131,
        "B": 121
    },
    {
        "Name": "Mellow apricot",
        "Hex": "#F8B878",
        "R": 248,
        "G": 184,
        "B": 120
    },
    {
        "Name": "Orange-yellow (Crayola)",
        "Hex": "#F8D568",
        "R": 248,
        "G": 213,
        "B": 104
    },
    {
        "Name": "Jasmine",
        "Hex": "#F8DE7E",
        "R": 248,
        "G": 222,
        "B": 126
    },
    {
        "Name": "Ghost white",
        "Hex": "#F8F8FF",
        "R": 248,
        "G": 248,
        "B": 255
    },
    {
        "Name": "Rose bonbon",
        "Hex": "#F9429E",
        "R": 249,
        "G": 66,
        "B": 158
    },
    {
        "Name": "Strawberry",
        "Hex": "#FA5053",
        "R": 250,
        "G": 80,
        "B": 83
    },
    {
        "Name": "Orange soda",
        "Hex": "#FA5B3D",
        "R": 250,
        "G": 91,
        "B": 61
    },
    {
        "Name": "Salmon",
        "Hex": "#FA8072",
        "R": 250,
        "G": 128,
        "B": 114
    },
    {
        "Name": "Sunset / Tuscan",
        "Hex": "#FAD6A5",
        "R": 250,
        "G": 214,
        "B": 165
    },
    {
        "Name": "Naples / Royal yellow",
        "Hex": "#FADA5E",
        "R": 250,
        "G": 218,
        "B": 94
    },
    {
        "Name": "Pale pink",
        "Hex": "#FADADD",
        "R": 250,
        "G": 218,
        "B": 221
    },
    {
        "Name": "Pale purple (Pantone)",
        "Hex": "#FAE6FA",
        "R": 250,
        "G": 230,
        "B": 250
    },
    {
        "Name": "Banana Mania",
        "Hex": "#FAE7B5",
        "R": 250,
        "G": 231,
        "B": 181
    },
    {
        "Name": "Antique white",
        "Hex": "#FAEBD7",
        "R": 250,
        "G": 235,
        "B": 215
    },
    {
        "Name": "Linen",
        "Hex": "#FAF0E6",
        "R": 250,
        "G": 240,
        "B": 230
    },
    {
        "Name": "Maximum yellow",
        "Hex": "#FAFA37",
        "R": 250,
        "G": 250,
        "B": 55
    },
    {
        "Name": "Light goldenrod yellow",
        "Hex": "#FAFAD2",
        "R": 250,
        "G": 250,
        "B": 210
    },
    {
        "Name": "Tart Orange",
        "Hex": "#FB4D46",
        "R": 251,
        "G": 77,
        "B": 70
    },
    {
        "Name": "Rajah",
        "Hex": "#FBAB60",
        "R": 251,
        "G": 171,
        "B": 96
    },
    {
        "Name": "Apricot",
        "Hex": "#FBCEB1",
        "R": 251,
        "G": 206,
        "B": 177
    },
    {
        "Name": "Corn / Maize",
        "Hex": "#FBEC5D",
        "R": 251,
        "G": 236,
        "B": 93
    },
    {
        "Name": "Shocking pink",
        "Hex": "#FC0FC0",
        "R": 252,
        "G": 15,
        "B": 192
    },
    {
        "Name": "Wild watermelon",
        "Hex": "#FC6C85",
        "R": 252,
        "G": 108,
        "B": 133
    },
    {
        "Name": "Tickle Me Pink",
        "Hex": "#FC89AC",
        "R": 252,
        "G": 137,
        "B": 172
    },
    {
        "Name": "Golden poppy",
        "Hex": "#FCC200",
        "R": 252,
        "G": 194,
        "B": 0
    },
    {
        "Name": "Yellow (Crayola)",
        "Hex": "#FCE883",
        "R": 252,
        "G": 232,
        "B": 131
    },
    {
        "Name": "Red Salsa",
        "Hex": "#FD3A4A",
        "R": 253,
        "G": 58,
        "B": 74
    },
    {
        "Name": "French fuchsia",
        "Hex": "#FD3F92",
        "R": 253,
        "G": 63,
        "B": 146
    },
    {
        "Name": "Xiaomi orange",
        "Hex": "#FD4900",
        "R": 253,
        "G": 73,
        "B": 0
    },
    {
        "Name": "Willpower orange",
        "Hex": "#FD5800",
        "R": 253,
        "G": 88,
        "B": 0
    },
    {
        "Name": "French pink",
        "Hex": "#FD6C9E",
        "R": 253,
        "G": 108,
        "B": 158
    },
    {
        "Name": "Mango",
        "Hex": "#FDBE02",
        "R": 253,
        "G": 190,
        "B": 2
    },
    {
        "Name": "Piggy pink",
        "Hex": "#FDDDE6",
        "R": 253,
        "G": 221,
        "B": 230
    },
    {
        "Name": "Aureolin",
        "Hex": "#FDEE00",
        "R": 253,
        "G": 238,
        "B": 0
    },
    {
        "Name": "Old lace",
        "Hex": "#FDF5E6",
        "R": 253,
        "G": 245,
        "B": 230
    },
    {
        "Name": "Zinc white",
        "Hex": "#FDF8FF",
        "R": 253,
        "G": 248,
        "B": 255
    },
    {
        "Name": "Lemon glacier",
        "Hex": "#FDFF00",
        "R": 253,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Red (RYB)",
        "Hex": "#FE2712",
        "R": 254,
        "G": 39,
        "B": 18
    },
    {
        "Name": "Persian rose",
        "Hex": "#FE28A2",
        "R": 254,
        "G": 40,
        "B": 162
    },
    {
        "Name": "Neon fuchsia",
        "Hex": "#FE4164",
        "R": 254,
        "G": 65,
        "B": 100
    },
    {
        "Name": "Purple pizzazz",
        "Hex": "#FE4EDA",
        "R": 254,
        "G": 78,
        "B": 218
    },
    {
        "Name": "Bittersweet",
        "Hex": "#FE6F5E",
        "R": 254,
        "G": 111,
        "B": 94
    },
    {
        "Name": "Melon",
        "Hex": "#FEBAAD",
        "R": 254,
        "G": 186,
        "B": 173
    },
    {
        "Name": "Dandelion",
        "Hex": "#FED85D",
        "R": 254,
        "G": 216,
        "B": 93
    },
    {
        "Name": "Light orange",
        "Hex": "#FED8B1",
        "R": 254,
        "G": 216,
        "B": 177
    },
    {
        "Name": "Yellow (Pantone)",
        "Hex": "#FEDF00",
        "R": 254,
        "G": 223,
        "B": 0
    },
    {
        "Name": "Yellow (RYB)",
        "Hex": "#FEFE33",
        "R": 254,
        "G": 254,
        "B": 51
    },
    {
        "Name": "Baby powder",
        "Hex": "#FEFEFA",
        "R": 254,
        "G": 254,
        "B": 250
    },
    {
        "Name": "Red",
        "Hex": "#FF0000",
        "R": 255,
        "G": 0,
        "B": 0
    },
    {
        "Name": "Winter Sky",
        "Hex": "#FF007C",
        "R": 255,
        "G": 0,
        "B": 124
    },
    {
        "Name": "Rose",
        "Hex": "#FF0080",
        "R": 255,
        "G": 0,
        "B": 128
    },
    {
        "Name": "Magenta (process)",
        "Hex": "#FF0090",
        "R": 255,
        "G": 0,
        "B": 144
    },
    {
        "Name": "Magenta / Fuchsia",
        "Hex": "#FF00FF",
        "R": 255,
        "G": 0,
        "B": 255
    },
    {
        "Name": "Deep pink",
        "Hex": "#FF1493",
        "R": 255,
        "G": 20,
        "B": 147
    },
    {
        "Name": "Hot magenta",
        "Hex": "#FF1DCE",
        "R": 255,
        "G": 29,
        "B": 206
    },
    {
        "Name": "Scarlet",
        "Hex": "#FF2400",
        "R": 255,
        "G": 36,
        "B": 0
    },
    {
        "Name": "Razzle dazzle rose",
        "Hex": "#FF33CC",
        "R": 255,
        "G": 51,
        "B": 204
    },
    {
        "Name": "Radical Red",
        "Hex": "#FF355E",
        "R": 255,
        "G": 53,
        "B": 94
    },
    {
        "Name": "Coquelicot",
        "Hex": "#FF3800",
        "R": 255,
        "G": 56,
        "B": 0
    },
    {
        "Name": "Sizzling Red",
        "Hex": "#FF3855",
        "R": 255,
        "G": 56,
        "B": 85
    },
    {
        "Name": "Wild Strawberry",
        "Hex": "#FF43A4",
        "R": 255,
        "G": 67,
        "B": 164
    },
    {
        "Name": "Zarqa",
        "Hex": "#FF4500",
        "R": 255,
        "G": 69,
        "B": 0
    },
    {
        "Name": "Red-orange",
        "Hex": "#FF5349",
        "R": 255,
        "G": 83,
        "B": 73
    },
    {
        "Name": "Fiery rose",
        "Hex": "#FF5470",
        "R": 255,
        "G": 84,
        "B": 112
    },
    {
        "Name": "Orange (Pantone)",
        "Hex": "#FF5800",
        "R": 255,
        "G": 88,
        "B": 0
    },
    {
        "Name": "Portland Orange",
        "Hex": "#FF5A36",
        "R": 255,
        "G": 90,
        "B": 54
    },
    {
        "Name": "Tomato",
        "Hex": "#FF6347",
        "R": 255,
        "G": 99,
        "B": 71
    },
    {
        "Name": "Rose pink",
        "Hex": "#FF66CC",
        "R": 255,
        "G": 102,
        "B": 204
    },
    {
        "Name": "Safety orange (blaze orange)",
        "Hex": "#FF6700",
        "R": 255,
        "G": 103,
        "B": 0
    },
    {
        "Name": "Orange-red",
        "Hex": "#FF681F",
        "R": 255,
        "G": 104,
        "B": 31
    },
    {
        "Name": "Hot pink",
        "Hex": "#FF69B4",
        "R": 255,
        "G": 105,
        "B": 180
    },
    {
        "Name": "Outrageous Orange",
        "Hex": "#FF6E4A",
        "R": 255,
        "G": 110,
        "B": 74
    },
    {
        "Name": "Ultra pink",
        "Hex": "#FF6FFF",
        "R": 255,
        "G": 111,
        "B": 255
    },
    {
        "Name": "Pumpkin",
        "Hex": "#FF7518",
        "R": 255,
        "G": 117,
        "B": 24
    },
    {
        "Name": "Orange (Crayola)",
        "Hex": "#FF7538",
        "R": 255,
        "G": 117,
        "B": 56
    },
    {
        "Name": "Safety orange",
        "Hex": "#FF7800",
        "R": 255,
        "G": 120,
        "B": 0
    },
    {
        "Name": "Heat Wave",
        "Hex": "#FF7A00",
        "R": 255,
        "G": 122,
        "B": 0
    },
    {
        "Name": "Coral",
        "Hex": "#FF7F50",
        "R": 255,
        "G": 127,
        "B": 80
    },
    {
        "Name": "Orange",
        "Hex": "#FF8000",
        "R": 255,
        "G": 128,
        "B": 0
    },
    {
        "Name": "Mango Tango",
        "Hex": "#FF8243",
        "R": 255,
        "G": 130,
        "B": 67
    },
    {
        "Name": "Dark orange",
        "Hex": "#FF8C00",
        "R": 255,
        "G": 140,
        "B": 0
    },
    {
        "Name": "Salmon pink",
        "Hex": "#FF91A4",
        "R": 255,
        "G": 145,
        "B": 164
    },
    {
        "Name": "Schauss pink",
        "Hex": "#FF91AF",
        "R": 255,
        "G": 145,
        "B": 175
    },
    {
        "Name": "Strawberry Blonde",
        "Hex": "#FF9361",
        "R": 255,
        "G": 147,
        "B": 97
    },
    {
        "Name": "Mona Lisa",
        "Hex": "#FF948E",
        "R": 255,
        "G": 148,
        "B": 142
    },
    {
        "Name": "Yellow Orange (Color Wheel)",
        "Hex": "#FF9505",
        "R": 255,
        "G": 149,
        "B": 5
    },
    {
        "Name": "Deep saffron",
        "Hex": "#FF9933",
        "R": 255,
        "G": 153,
        "B": 51
    },
    {
        "Name": "Atomic tangerine",
        "Hex": "#FF9966",
        "R": 255,
        "G": 153,
        "B": 102
    },
    {
        "Name": "Orange peel",
        "Hex": "#FF9F00",
        "R": 255,
        "G": 159,
        "B": 0
    },
    {
        "Name": "Light salmon",
        "Hex": "#FFA07A",
        "R": 255,
        "G": 160,
        "B": 122
    },
    {
        "Name": "Vivid tangerine",
        "Hex": "#FFA089",
        "R": 255,
        "G": 160,
        "B": 137
    },
    {
        "Name": "Orange (web)",
        "Hex": "#FFA500",
        "R": 255,
        "G": 165,
        "B": 0
    },
    {
        "Name": "Carnation pink",
        "Hex": "#FFA6C9",
        "R": 255,
        "G": 166,
        "B": 201
    },
    {
        "Name": "Bright yellow (Crayola)",
        "Hex": "#FFAA1D",
        "R": 255,
        "G": 170,
        "B": 29
    },
    {
        "Name": "Yellow Orange",
        "Hex": "#FFAE42",
        "R": 255,
        "G": 174,
        "B": 66
    },
    {
        "Name": "Chinese yellow",
        "Hex": "#FFB200",
        "R": 255,
        "G": 178,
        "B": 0
    },
    {
        "Name": "Light pink",
        "Hex": "#FFB6C1",
        "R": 255,
        "G": 182,
        "B": 193
    },
    {
        "Name": "Cherry blossom pink",
        "Hex": "#FFB7C5",
        "R": 255,
        "G": 183,
        "B": 197
    },
    {
        "Name": "Selective yellow",
        "Hex": "#FFBA00",
        "R": 255,
        "G": 186,
        "B": 0
    },
    {
        "Name": "Cotton candy",
        "Hex": "#FFBCD9",
        "R": 255,
        "G": 188,
        "B": 217
    },
    {
        "Name": "Macaroni and Cheese",
        "Hex": "#FFBD88",
        "R": 255,
        "G": 189,
        "B": 136
    },
    {
        "Name": "Amber",
        "Hex": "#FFBF00",
        "R": 255,
        "G": 191,
        "B": 0
    },
    {
        "Name": "Pink",
        "Hex": "#FFC0CB",
        "R": 255,
        "G": 192,
        "B": 203
    },
    {
        "Name": "Mikado yellow",
        "Hex": "#FFC40C",
        "R": 255,
        "G": 196,
        "B": 12
    },
    {
        "Name": "Buff",
        "Hex": "#FFC680",
        "R": 255,
        "G": 198,
        "B": 128
    },
    {
        "Name": "Peach (Crayola)",
        "Hex": "#FFCBA4",
        "R": 255,
        "G": 203,
        "B": 164
    },
    {
        "Name": "Sunglow",
        "Hex": "#FFCC33",
        "R": 255,
        "G": 204,
        "B": 51
    },
    {
        "Name": "Cyber yellow",
        "Hex": "#FFD300",
        "R": 255,
        "G": 211,
        "B": 0
    },
    {
        "Name": "Gold (web) (Golden)",
        "Hex": "#FFD700",
        "R": 255,
        "G": 215,
        "B": 0
    },
    {
        "Name": "School bus yellow",
        "Hex": "#FFD800",
        "R": 255,
        "G": 216,
        "B": 0
    },
    {
        "Name": "Peach puff",
        "Hex": "#FFDAB9",
        "R": 255,
        "G": 218,
        "B": 185
    },
    {
        "Name": "Mimi pink",
        "Hex": "#FFDAE9",
        "R": 255,
        "G": 218,
        "B": 233
    },
    {
        "Name": "Sizzling Sunrise",
        "Hex": "#FFDB00",
        "R": 255,
        "G": 219,
        "B": 0
    },
    {
        "Name": "Mustard",
        "Hex": "#FFDB58",
        "R": 255,
        "G": 219,
        "B": 88
    },
    {
        "Name": "Unbleached silk",
        "Hex": "#FFDDCA",
        "R": 255,
        "G": 221,
        "B": 202
    },
    {
        "Name": "Pink lace",
        "Hex": "#FFDDF4",
        "R": 255,
        "G": 221,
        "B": 244
    },
    {
        "Name": "Skin color",
        "Hex": "#FFDEAD",
        "R": 255,
        "G": 222,
        "B": 173
    },
    {
        "Name": "Golden yellow",
        "Hex": "#FFDF00",
        "R": 255,
        "G": 223,
        "B": 0
    },
    {
        "Name": "Moccasin",
        "Hex": "#FFE4B5",
        "R": 255,
        "G": 228,
        "B": 181
    },
    {
        "Name": "Bisque",
        "Hex": "#FFE4C4",
        "R": 255,
        "G": 228,
        "B": 196
    },
    {
        "Name": "Misty rose",
        "Hex": "#FFE4E1",
        "R": 255,
        "G": 228,
        "B": 225
    },
    {
        "Name": "Peach",
        "Hex": "#FFE5B4",
        "R": 255,
        "G": 229,
        "B": 180
    },
    {
        "Name": "Middle yellow",
        "Hex": "#FFEB00",
        "R": 255,
        "G": 235,
        "B": 0
    },
    {
        "Name": "Blanched almond",
        "Hex": "#FFEBCD",
        "R": 255,
        "G": 235,
        "B": 205
    },
    {
        "Name": "Canary yellow",
        "Hex": "#FFEF00",
        "R": 255,
        "G": 239,
        "B": 0
    },
    {
        "Name": "Papaya whip",
        "Hex": "#FFEFD5",
        "R": 255,
        "G": 239,
        "B": 213
    },
    {
        "Name": "Yellow Rose",
        "Hex": "#FFF000",
        "R": 255,
        "G": 240,
        "B": 0
    },
    {
        "Name": "Lavender blush",
        "Hex": "#FFF0F5",
        "R": 255,
        "G": 240,
        "B": 245
    },
    {
        "Name": "Lemon yellow",
        "Hex": "#FFF44F",
        "R": 255,
        "G": 244,
        "B": 79
    },
    {
        "Name": "Seashell",
        "Hex": "#FFF5EE",
        "R": 255,
        "G": 245,
        "B": 238
    },
    {
        "Name": "Lemon",
        "Hex": "#FFF700",
        "R": 255,
        "G": 247,
        "B": 0
    },
    {
        "Name": "Cornsilk",
        "Hex": "#FFF8DC",
        "R": 255,
        "G": 248,
        "B": 220
    },
    {
        "Name": "Cosmic latte",
        "Hex": "#FFF8E7",
        "R": 255,
        "G": 248,
        "B": 231
    },
    {
        "Name": "Lemon chiffon",
        "Hex": "#FFFACD",
        "R": 255,
        "G": 250,
        "B": 205
    },
    {
        "Name": "Floral white",
        "Hex": "#FFFAF0",
        "R": 255,
        "G": 250,
        "B": 240
    },
    {
        "Name": "Snow",
        "Hex": "#FFFAFA",
        "R": 255,
        "G": 250,
        "B": 250
    },
    {
        "Name": "Cream",
        "Hex": "#FFFDD0",
        "R": 255,
        "G": 253,
        "B": 208
    },
    {
        "Name": "Yellow",
        "Hex": "#FFFF00",
        "R": 255,
        "G": 255,
        "B": 0
    },
    {
        "Name": "Unmellow yellow",
        "Hex": "#FFFF66",
        "R": 255,
        "G": 255,
        "B": 102
    },
    {
        "Name": "Canary",
        "Hex": "#FFFF99",
        "R": 255,
        "G": 255,
        "B": 153
    },
    {
        "Name": "Lemon yellow (Crayola)",
        "Hex": "#FFFF9F",
        "R": 255,
        "G": 255,
        "B": 159
    },
    {
        "Name": "Light yellow",
        "Hex": "#FFFFE0",
        "R": 255,
        "G": 255,
        "B": 224
    },
    {
        "Name": "Ivory",
        "Hex": "#FFFFF0",
        "R": 255,
        "G": 255,
        "B": 240
    },
    {
        "Name": "White",
        "Hex": "#FFFFFF",
        "R": 255,
        "G": 255,
        "B": 255
    }
];

/**
 * Gets the nearest colour name.
 * @param {any} red
 * @param {any} green
 * @param {any} blue
 * @returns
 */
function getColourName(red, green, blue) {
    try {

        var diff = 3 * 255;
        var index = 0;

        for (let i = 0; i < Names.length; i++) {
            var obj = Names[i];

            var newDiff = Math.abs(red - obj.R)
                + Math.abs(green - obj.G) + Math.abs(blue - obj.B);

            if (newDiff == 0) {
                return obj.Name;
            } 

            if (newDiff < diff) {
                diff = newDiff;
                index = i;
            }
        }

        return Names[index].Name;

    }
    catch (err) {
        console.error(err.message + " in getColourName()");
    }
}

/*
 * Changes the colour of the box and the value in the edit box in accordance with the positions
 * of the sliders.
 */
function changeColour() {
    try {

        var red = document.getElementById("red-slider").value;
        var green = document.getElementById("green-slider").value;
        var blue = document.getElementById("blue-slider").value;

        var redhex = Math.abs(red).toString(16);
        if (redhex.length === 1) redhex = "0" + redhex;

        var greenhex = Math.abs(green).toString(16);
        if (greenhex.length === 1) greenhex = "0" + greenhex;

        var bluehex = Math.abs(blue).toString(16);
        if (bluehex.length === 1) bluehex = "0" + bluehex;

        var hex = "#" + redhex + greenhex + bluehex;

        var name = getColourName(red, green, blue);

        document.getElementById("colour-box").style.backgroundColor = hex;

        document.getElementById("hex-box-id").value = hex;

        document.getElementById("colour-name-id").innerHTML = name;

    }
    catch (err) {
        console.error(err.message + " in changeColour()");
    }
}

/*
 * Changes the colour of the box and the positions of the sliders in accordance with the
 * value of the edit box.
 */
function editColour() {
    try {

        var hex = document.getElementById("hex-box-id").value;

        if (/^#[0-9A-F]{6}$/i.test(hex)) {

            document.getElementById("colour-box").style.backgroundColor = hex;
            hex = hex.substring(1, hex.length);

            var hexNum = parseInt(hex, 16);

            var red = Math.floor(hexNum / 65536)
            var green = Math.floor(hexNum / 256) % 256;
            var blue = hexNum % 256;

            document.getElementById("red-slider").value = red;
            document.getElementById("green-slider").value = green;
            document.getElementById("blue-slider").value = blue;

            var name = getColourName(red, green, blue);

            document.getElementById("colour-name-id").innerHTML = name;

        }

    }
    catch (err) {
        console.error(err.message + " in editColour()");
    }
}

/**
 * Initialise colours randomly
 */
function init() {
    try {

        // Assign colours randomly
        document.getElementById("red-slider").value = Math.floor(256*Math.random());
        document.getElementById("green-slider").value = Math.floor(256 * Math.random());
        document.getElementById("blue-slider").value = Math.floor(256 * Math.random());

        changeColour();

        // Add event handlers
        // Called when red slider is changed
        document.getElementById("red-slider").addEventListener("input", changeColour);
        // Called when green slider is changed
        document.getElementById("green-slider").addEventListener("input", changeColour);
        // Called when blue slider is changed
        document.getElementById("blue-slider").addEventListener("input", changeColour);

        // Called when edit box is changed
        document.getElementById("hex-box-id").addEventListener("input", editColour);

    }
    catch (err) {
        console.error(err.message + " in init()");
    }
}


// Initialise
init();

