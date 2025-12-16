import sqlite3

# Connect to your database file
conn = sqlite3.connect("my.db")
cursor = conn.cursor()

# Get the list of all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetcha
