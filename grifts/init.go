package grifts

import (
	"github.com/data-love/buffalo_react/actions"
	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
