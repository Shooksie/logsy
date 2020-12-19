import requests
import datetime
import random
from python_graphql_client import GraphqlClient
import time
# Instantiate the client with an endpoint.
client = GraphqlClient(endpoint="http://localhost:8080/v1/graphql", headers={'x-hasura-admin-secret': 'time-scale-secret'})

# Create the query string and variables required for the request.
query = """
  mutation InsertMeasure($companyid: String = "", $identifier: String = "", $name: String = "", $time: timestamptz = "", $value: float8 = "") {
    insert_measurements_one(object: {companyid: $companyid, identifier: $identifier, name: $name, time: $time, value: $value}) {
      companyid
      identifier
      name
      time
      value
    }
  }
"""

def generate_measurement():
  variables =  {
    'time': datetime.datetime.now().isoformat(),
    'companyid': 'world',
    'identifier': 'hello',
    'name': 'cpu',
    'value': random.randint(0, 100)
  }
  print(variables)
  data = client.execute(query=query, variables=variables)
  print(data)

while True:
  generate_measurement()
  # time.sleep(1)
