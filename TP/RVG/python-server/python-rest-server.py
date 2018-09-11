import flask
import functools
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

mock = [
    { "id": 1,
      "title": 'Space Invaders',
      "editor": 'Taito',
      "year": 1978,
      "consoles": ['Atari VCS', 'MSX'],
      "play": 'http://www.playretrogames.com/3022-space-invaders-the-original-game',
      "nbView": 0,
    },
    { "id": 2,
      "title": 'Pac Man',
      "editor": 'Namco',
      "year": 1980,
      "consoles": ['Atari VCS', 'MSX'],
      "play": 'https://www.retrogames.cc/arcade-games/pac-man-midway.html',
      "nbView": 0,
    },
    { "id": 3,
      "title": 'Pong',
      "editor": 'Atari',
      "year": 1972,
      "consoles": ['Atari VCS', 'MSX'],
      "play": 'https://www.youtube.com/watch?v=it0sf4CMDeM',
      "nbView": 0,
    },
    { "id": 4,
      "title": 'Super Mario Bros',
      "editor": 'Nintendo',
      "year": 1985,
      "consoles": ['NES'],
      "play": 'https://emulatoronline.com/nes-games/super-mario-bros/',
      "nbView": 0,
    },
    { "id": 5,
      "title": 'Tetris',
      "editor": 'Nintendo',
      "year": 1984,
      "consoles": ['NET', 'Game boy'],
      "play": 'https://emulatoronline.com/nes-games/classic-tetris/',
      "nbView": 0,
    },
    { "id": 6,
      "title": 'Super Mario Kart',
      "editor": 'Nintendo',
      "year": 1992,
      "consoles": ['SNES'],
      "play": 'https://emulatoronline.com/snes-games/super-mario-kart/',
      "nbView": 0,
    },
    { "id": 7,
      "title": 'Street Fighter 2',
      "editor": 'Nintendo',
      "year": 1991,
      "consoles": ['SNES'],
      "play": 'https://emulatoronline.com/snes-games/street-fighter-2-turbo-hyper-fighting/',
      "nbView": 0,
    },
    { "id": 8,
      "title": 'Another World',
      "editor": 'Delphine Software',
      "year": 1991,
      "consoles": ['Atari ST', 'Amiga'],
      "play": 'https://emulatoronline.com/sega-games/another-world/',
      "nbView": 0,
    },
    { "id": 9,
      "title": 'Commando',
      "editor": 'Capcom',
      "year": 1985,
      "consoles": ['Amstrad', 'Commodore'],
      "play": 'https://play-roms.com/coin-op-arcade/commando',
      "nbView": 0,
    },
  ];

@app.route("/")
def hello():
    s = """Python REST Service VideoGame
=============================
GET /games
GET /games/<id>
GET /games/top/<n>
POST /games
PUT /games
DELETE /games"""
    return flask.Response(s, mimetype='text/plain')

@app.route("/games")
def all():
  print(f"GET /games {len(mock)}")
  return flask.jsonify(mock)

@app.route("/games/<id>")
def id(id):
  try:
    game = [g for g in mock if g["id"] == int(id)][0]
    print(f"GET /game/{id} {game['title']}")
    return flask.jsonify(game)
  except:
    print(f"GET /game/{id} 404")
    return flask.abort(404)

@app.route("/games/top/<n>")
def top(n):
  games = sorted([g for g in mock], key=functools.cmp_to_key(cmp))[0:int(n)]
  print(f"GET /games/top/{n} {len(games)}")
  return flask.jsonify(games)

def cmp(g1, g2):
  return g2["nbView"] - g1["nbView"]

@app.route("/games", methods=['PUT'])
def update():
  try:
    game = flask.request.json
    vg = [g for g in mock if g["id"] == game["id"]][0]
    vg["title"] = game["title"]
    vg["nbView"] = game["nbView"]
    print(f"PUT /games {vg['title']}")
    return flask.jsonify(success=True)
  except:
    flask.abort(404)

@app.route("/games/<id>", methods=['DELETE'])
def delete(id):
  try:
    game = [g for g in mock if g["id"] == int(id)][0]
    print(f"DELETE /game/{id}")
    mock.remove(game)
    return flask.jsonify(success=True)
  except:
    print(f"DELETE /games/{id} returns 404")
    return flask.abort(404)

@app.route("/games", methods=['POST'])
def insert():
  game = flask.request.json
  mock.append(game)
  print(f"POST /games {game['title']}")
  return flask.jsonify(success=True)












app.run()
