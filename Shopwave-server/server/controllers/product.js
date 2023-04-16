const { Product: ProductService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await ProductService.getList();

  if (doc.length) {
    return res.getRequest(doc);
  }

  return res.getRequest([]);
};

const getDetailById = async (req, res) => {
  const { publicId } = req.params;
  const data = { publicId };
  const { doc } = await ProductService.getDetailById(data);

  if (doc) {
    return res.getRequest(doc);
  }

  return res.getRequest();
};

const save = async (req, res) => {
  try {
    const { doc } = await ProductService.save(req.body);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

const remove = async (req, res) => {
  try {
    const productId = req.params.publicId;
    const data = { productId, ...req.body };
    const { doc } = await ProductService.remove(data);

    if (doc) {
      return res.deleted();
    }

    return res.deleted();
  } catch (err) {
    return res.serverError();
  }
};

const update = async (req, res) => {
  try {
    const productId = req.params.publicId;
    const data = { productId, ...req.body };
    const { doc } = await ProductService.update(data);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

module.exports = {
  getList, save, update, getDetailById, remove,
};
