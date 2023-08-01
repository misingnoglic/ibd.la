import pandas as pd
import json

def csv_to_nested_dict(csv_file):
    # Read the CSV data
    df = pd.read_csv(csv_file)

    # Create the nested dictionary structure
    nested_dict = {}
    for _, row in df.iterrows():
        group = row['Group']
        covariate = row['Covariate']

        if group not in nested_dict:
            nested_dict[group] = {}

        covariate_data = [{'quarter': i, 'label': f'Q{i}', "mean": row[f"Q{i} mean"], "std": row[f"Q{i} std"]} for i in range(1, 11)]
        nested_dict[group][covariate] = covariate_data

    return nested_dict

# Replace 'input.csv' with the actual file path of your CSV
csv_file = 'data/prs/simulated_prs_data.csv'
result = csv_to_nested_dict(csv_file)

# Print the result in the desired format
with open('data/prs/simulated_prs_data.json', 'w') as outfile:
    json.dump(result, outfile, indent=2)
