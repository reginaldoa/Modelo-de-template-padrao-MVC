exports.middlewareglobal= (req,res,next) =>{
    res.locals.umaVariaveLocal ='Este é o valor da variável local.';
    next();
}

exports.outromiddleware =(req,res,next)=>{
    console.log('sou seu outro middleware');
    next();
}


exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
    }

  exports.csrfMiddleware = (req, res, next)=>{
  res.locals.csrfToken = req.csrfToken();
    next();
  }