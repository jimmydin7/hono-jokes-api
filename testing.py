import requests

BASE_URL = "https://jokes.jimdinias.dev"

def list_jokes():
    response = requests.get(f"{BASE_URL}/api/jokes")
    response.raise_for_status()
    return response.json()

def create_joke(item: str):
    item = item.strip()
    if not item:
        raise ValueError("item is required")

    response = requests.post(
        f"{BASE_URL}/api/jokes",
        json={"item": item}
    )
    response.raise_for_status()
    return response.json()

def delete_joke(joke_id: int):
    if not isinstance(joke_id, int):
        raise ValueError("bad id")

    response = requests.delete(f"{BASE_URL}/api/jokes/{joke_id}")

    if response.status_code == 404:
        return {"error": "id not found"}

    response.raise_for_status()
    return response.json()

print(create_joke("Why do programmers hate nature? Too many bugs."))
print(list_jokes())