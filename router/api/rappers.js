const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const rappers = require("../../Rappers");
const uuid = require("uuid");

module.exports = router;

router.get("/", (request, response) => {
  // const rapperName = request.params.rapperName.toLowerCase()
  // console.log(rappers)
  response.json(rappers);
});

router.get("/:id", (request, response) => {
  const found = rappers.some(
    (eachrapper) => eachrapper.id === parseInt(request.params.id)
  );
  if (found) {
    response.json(
      rappers.filter(
        (eachrapper) => eachrapper.id === parseInt(request.params.id)
      )
    );
  } else {
    response
      .status(404)
      .json({ message: `No rapper with the id of ${request.params.id}` });
  }
});

//  create rapper

router.post("/", (request, response) => {
  // console.log("hello hahha")
  // response.send(request.body)
  const newRapper = {
    id: uuid.v4(),
    age: request.body.age,
    name: request.body.name,
    birthLocation: request.body.birthLocation,
  };

  if (!newRapper.name || !newRapper.age || !newRapper.birthLocation) {
    return response
      .status(400)
      .json({ msg: "Please include a name, age and birthlocation" });
  }

  rappers.push(newRapper);
  response.json(rappers);
});

//  update rapper
router.put("/:id", (request, response) => {
  const found = rappers.some(
    (eachrapper) => eachrapper.id === parseInt(request.params.id)
  );
  if (found) {
    const updatedRapper = request.body;
    rappers.forEach((eachrapper) => {
      if (eachrapper.id === parseInt(request.params.id)) {
        (eachrapper.name = updatedRapper.name
          ? updatedRapper.name
          : eachrapper.name),
          (eachrapper.age = updatedRapper.age
            ? updatedRapper.age
            : eachrapper.age),
          (eachrapper.birthLocation = updatedRapper.birthLocation
            ? updatedRapper.birthLocation
            : eachrapper.birthLocation);

        response.json({ message: "member Updated", eachrapper });
      }
    });
  } else {
    response
      .status(404)
      .json({ message: `No rapper with the id of ${request.params.id}` });
  }
});

// Delete Rapper

router.delete("/:id", (request, response) => {
  const found = rappers.some(
    (eachrapper) => eachrapper.id === parseInt(request.params.id)
  );
  if (found) {
    response.json({
      message: `DELETED  rapper with the id of ${request.params.id}`,
      rappers: rappers.filter(
        (eachrapper) => eachrapper.id !== parseInt(request.params.id)
      ),
    });
  } else {
    response
      .status(404)
      .json({ message: `No rapper with the id of ${request.params.id}` });
  }
});
