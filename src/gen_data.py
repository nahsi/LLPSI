import json
import os
# Use this script to generate the chapters data file (data.js) from all the chapters json files

def int_to_Roman(num):
        val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4,
            1
            ]
        syb = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV",
            "I"
            ]
        roman_num = ''
        i = 0
        while  num > 0:
            for _ in range(num // val[i]):
                roman_num += syb[i]
                num -= val[i]
            i += 1
        return roman_num

data = []

for count, filename in enumerate(os.listdir("chapters")):
	if("chapter_" not in filename):
		continue
	chapter_data = {}
	with open("chapters/"+filename, "r", encoding="utf-8") as f:
		json_data = json.load(f)
		chapter_data["id"] = json_data["id"]
		chapter_data["name"] = json_data["name"]
		chapter_data["file"] = filename
		chapter_data["exercises"] = len(json_data["exercises"])

	data.append(chapter_data)

data = sorted(data, key=lambda k: k['id'])

with open('data.json', 'w', encoding='utf-8') as f:
	json.dump(data, f, ensure_ascii=False, indent=4)
