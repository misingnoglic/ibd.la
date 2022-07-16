import json

with open('oldData.json', 'r') as oldDataFile:
    data = json.load(oldDataFile)

significant_connections = set([('European Non-Jewish', 'Ashkenazi Jewish'),
 ('European Non-Jewish', 'Pacific Islander'),
 ('European Non-Jewish', 'Black/African American II'),
 ('Mexican', 'Ashkenazi Jewish'),
 ('Mexican', 'Puerto Rican'),
 ('Mexican', 'Black/African American II'),
 ('Ashkenazi Jewish', 'Iranian Jewish'),
 ('Ashkenazi Jewish', 'Mexican'),
 ('Ashkenazi Jewish', 'Puerto Rican'),
 ('Black/African American I', 'Black/African American II'),
 ('Black/African American I', 'Black/African American III'),
 ('Black/African American I', 'European Non-Jewish'),
 ('Chinese', 'Filipino'),
 ('Chinese', 'Vietnamese'),
 ('Chinese', 'Pacific Islander'),
 ('Filipino', 'Pacific Islander'),
 ('Filipino', 'Chinese'),
 ('Filipino', 'Puerto Rican'),
 ('Japanese', 'Korean'),
 ('Japanese', 'Pacific Islander'),
 ('Japanese', 'Chinese'),
 ('Korean', 'Japanese'),
 ('Korean', 'Chinese'),
 ('Korean', 'Pacific Islander'),
 ('Armenian', 'Iranian Muslim'),
 ('Armenian', 'Lebanese Christian'),
 ('Armenian', 'Iranian Jewish'),
 ('Iranian Muslim', 'Iranian Jewish'),
 ('Iranian Muslim', 'Pakistani'),
 ('Iranian Muslim', 'Armenian'),
 ('Punjabi/Bengali', 'Sindhi Muslim'),
 ('Punjabi/Bengali', 'Pakistani'),
 ('Punjabi/Bengali', 'Gujrati II'),
 ('Puerto Rican', 'Pacific Islander'),
 ('Puerto Rican', 'Mexican'),
 ('Puerto Rican', 'Black/African American II'),
 ('Telugu', 'Gujrati II'),
 ('Telugu', 'Punjabi/Bengali'),
 ('Telugu', 'Pakistani'),
 ('Vietnamese', 'Chinese'),
 ('Vietnamese', 'Filipino'),
 ('Vietnamese', 'Pacific Islander'),
 ('Iranian Jewish', 'Iranian Muslim'),
 ('Iranian Jewish', 'Ashkenazi Jewish'),
 ('Iranian Jewish', 'Pakistani'),
 ('Lebanese Christian', 'Egyptian Christian'),
 ('Lebanese Christian', 'European Non-Jewish'),
 ('Lebanese Christian', 'Arab Muslim'),
 ('Sindhi Muslim', 'Pakistani'),
 ('Sindhi Muslim', 'Punjabi/Bengali'),
 ('Sindhi Muslim', 'Gujrati II'),
 ('Egyptian Christian', 'Lebanese Christian'),
 ('Egyptian Christian', 'Arab Muslim'),
 ('Egyptian Christian', 'Pacific Islander'),
 ('Pakistani', 'Sindhi Muslim'),
 ('Pakistani', 'Iranian Muslim'),
 ('Pakistani', 'Punjabi/Bengali'),
 ('Arab Muslim', 'Egyptian Christian'),
 ('Arab Muslim', 'Pakistani'),
 ('Arab Muslim', 'Lebanese Christian'),
 ('Pacific Islander', 'Puerto Rican'),
 ('Pacific Islander', 'Filipino'),
 ('Pacific Islander', 'European Non-Jewish'),
 ('Gujrati II', 'Sindhi Muslim'),
 ('Gujrati II', 'Punjabi/Bengali'),
 ('Gujrati II', 'Telugu'),
 ('Black/African American II', 'Puerto Rican'),
 ('Black/African American II', 'Black/African American I'),
 ('Black/African American II', 'European Non-Jewish'),
 ('Black/African American III', 'Black/African American I'),
 ('Black/African American III', 'Black/African American II'),
 ('Black/African American III', 'Puerto Rican')])


new_data = {'nodes': [], 'edges': []}

for node in data['nodes']:
    new_data['nodes'].append({
        'id': node['id'],
        'style': {'label': {'value': node['id']}}
    })

for link in data['links']:
    if (link['source'], link['target']) in significant_connections:
        new_data['edges'].append({
            'source': link['source'],
            'target': link['target']
            # TODO: figure out weights...
        })

with open('homepageData.json', 'w') as homepageDataFile:
    json.dump(new_data, homepageDataFile)